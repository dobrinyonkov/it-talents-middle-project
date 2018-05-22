function movieDetailsController(id) {
    var source = document.getElementById('movie-details-template').innerHTML;
    var template = Handlebars.compile(source);

    Promise.all([movieStorage.getMovieById(id), movieStorage.getProgramById(id)])
        .then(data => {
            $('body').css({ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data[0].backdrop_path})` });
            var html = template({ movie: data[0], program: data[1] });
            console.log(data[0])
            document.querySelector('#wrapper').innerHTML = html;

            var addFavoritesButton = document.getElementById("add-favorite-btn");

            if (sessionStorage.getItem('user')) {
                if (userService.inMyFavorite(sessionStorage.getItem('user'), id)) {
                    addFavoritesButton.innerText = "Добавено в любими";
                }
            }

            addFavoritesButton.addEventListener('click', function () {
                if ($(addFavoritesButton).text() == 'Добавено в любими') {
                    if (sessionStorage.getItem('isLogged')) {
                        userService.removeFavorite(sessionStorage.getItem('user'), id);
                        addFavoritesButton.innerText = "ДОБАВИ В ЛЮБИМИ";
                    } else {
                        location.replace('#login');
                    }
                    return;
                }
                if (sessionStorage.getItem('isLogged')) {
                    userService.addFavorite(sessionStorage.getItem('user'), id);
                    addFavoritesButton.innerText = "Добавено в любими";
                } else {
                    location.replace('#login');
                }
            });

            $('li.dates').on('click', function () {
                var hours = document.getElementById('program-hours-template').innerHTML;
                var hoursTemplate = Handlebars.compile(hours);
                console.log(data[1]);
                var hours = data[1].dates[this.id].hours;
                var html = hoursTemplate({ hours: hours });
                document.querySelector('#movie-program-hours').innerHTML = html;
            });


        });

}

function favoriteMovies() {

    var moviesId = userService.getFavoriteMovies(sessionStorage.getItem('user'));

    var source = document.getElementById('program-list-template').innerHTML;
    var template = Handlebars.compile(source);

    var html = "";


    moviesId.forEach(function (id) {
        movieStorage.getMovieById(id).then(data => {

            html += template({ movie: data });
            document.querySelector('#wrapper').innerHTML = html;
        });
    });

}