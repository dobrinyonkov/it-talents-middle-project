var movieStorage = (function () {

    function Movie(title, id, rating, genre, description, duration, trailerUrl, releaseData, img) {
        this.title = title;
        this.id = id;
        this.rating = rating;
        this.genre = genre;
        this.description = description;
        this.duration = duration;
        this.trailerUrl = trailerUrl;
        this.releaseData = releaseData;
        this.img = img;
        this.projekcii = [];
    }

    Movie.prototype.addProjekciya = function (dateAndHour) {
        var d = new Date(dateAndHour);
        if (d != 'Invalid Date') {
            this.projekcii.push(d);
        }
        else {
            throw Error('The string is not a date');
        }
    }

    /*//проблем с часа, излиза -3 - 2014-10-13T08:13:00.000Z
    // след feb работи
    var dateAndHour = "13 feb 2014 11:13:00";
    var d = new Date(dateAndHour);
    console.log(d);*/

    function MoviesStorage() {
        //за пробите е this, за проекта ще е var
        this.playingNow = [];
        this.commingSoon = [];
        this.screens = [];
        
    }

    MoviesStorage.prototype.getPlayingNowByName = function (movieName) {
        var getPlayingNowByName = [];
        this.playingNow.forEach(m => {
            if (m.title.toLowerCase().startsWith(movieName.toLowerCase())) {
                getPlayingNowByName.push(m);
            }
        });
        return getPlayingNowByName;
    }

    MoviesStorage.prototype.getIdByName = function (movieName) {
        return this.playingNow.find(m => m.title == movieName);
    }

    MoviesStorage.prototype.getGenre = function (genreId) {
        var genre = this.genres.find(g => g.id = genreId);
        return genre.name;
    }

    MoviesStorage.prototype.getProgramById = function (id) {
        var self = this;
        return fetch('http://127.0.0.1:8080/KinoArena/js/json/program.json').then(r => r.json())
        .then(data => {
            var program = data.find(p => p.movieId == id);
            return program;
        });
    }

    MoviesStorage.prototype.getAllPlayingNow = function () {
        var self = this;
        return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d9c8f259630fa46418ae1ddaabe71b6c&language=bg&page=1')
        .then(r => r.json())
        .then(data => {
            self.playingNow = data.results;            
            return self.playingNow;
        })
        .catch();
    }

    MoviesStorage.prototype.getAllCommingSoon = function () {
        var self = this;
        return fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=d9c8f259630fa46418ae1ddaabe71b6c&language=bg&page=3')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            data = data.results            
            self.commingSoon = data;
            return data;
        });
    }

    MoviesStorage.prototype.getMovieById = function (id) {
        var self = this;
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d9c8f259630fa46418ae1ddaabe71b6c&append_to_response=videos`)
        .then(r => r.json())
        .then(data => {
            return data;
        });
    }

    // MoviesStorage.prototype.addMovieToPlayingNow = function (movie) {
    //     if (movie instanceof Movie) {
    //         this.playingNow.push(movie);
    //     } else {
    //         throw Error('The object is not created with constructor Movie');
    //     }
    // }

    // MoviesStorage.prototype.addMovieToCommingSoon = function (movie) {
    //     if (movie instanceof Movie) {
    //         this.commingSoon.push(movie);
    //     } else {
    //         throw Error('The object is not created with constructor Movie');
    //     }
    // }

    // MoviesStorage.prototype.addProjekciyatoMovie = function (id, dateAndHour) {
    //     var movie = this.playingNow.find(function (element) {
    //         return element.id == id;
    //     });

    //     if (movie != null) {
    //         movie.addProjekciya(dateAndHour);
    //     }
    //     else {
    //         throw Error('The movie was not found in the playin now array');
    //     }
    // }

    /*var arr = ["krem", 'plod', 'masiv'];
    var k = arr.find(function(el){
        return el =='krem';
    });
    console.log(k != null);*/

    MoviesStorage.prototype.findMovieByTitle = function (title) {
        return this.playingNow.find(function (el) {
            if (el.title == title) {
                return el;
            } else {
                throw new Error('The movie was not found by title in the playin now array')
            }
        });
    }

    //13 feb 2014
    //2014-10-13
    MoviesStorage.prototype.findMovieByDate = function (date) {
        var movieInThisDate = [];

        var dataInFunction = new Data(date);
        if (dataInFunction != 'Invalid Date') {
            dataInFunction = dataInFunction.toLocaleDateString();
        }
        else {
            throw Error('The string is not a date');
        }

        this.playingNow.find(function (el) {
            el.projekcii.some(function (den) {
                if (den == dataInFunction) {
                    movieInThisDate.push(el);
                }
            });
        });

        return movieInThisDate;
    }

    /*var k = new Date("13 feb 2014");
    console.log(k.toLocaleDateString());
    console.log(k);*/
    return new MoviesStorage;
})();