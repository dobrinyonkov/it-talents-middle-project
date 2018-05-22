function homeController() {
    var source = document.getElementById('home-template').innerHTML;
    var template = Handlebars.compile(source);

    $('#home').addClass('active');

    Promise.all([cinemaStorage.getCinemas(), movieStorage.getAllCommingSoon(), movieStorage.getAllPlayingNow()]).then(data => {
        var html = template({
            cinemas: data[0],
            commingSoon: data[1],
            nowPlaying: data[2]
        });
        document.querySelector('#wrapper').innerHTML = html;
        $('.movie').on('click', function () {
            var id = this.id;
            location.replace(`#movieDetails&id=${id}`);
        });

        $('#cinema-select').on('change', function () {
            dates = data[0][this.value].screens;
            var result = '';
            dates.forEach((d, index) => result += `<option value="${index}">${d.date}</option>`);
            $(result).appendTo($('#date-select'));
        });

        $('#date-select').on('change', function () {
            movies = data[0][this.value].screens;
            var $this = $(this);
            var day = movies[$this.val()];
            var result = '';
            day.movies.forEach(el => {
                movieStorage.getMovieById(el.movie.id).then(movie => {
                    el.movie = movie;
                    result = `<option value="${el.movie.id}">${el.movie.title}</option>`
                    $(result).appendTo($('#movie-select'));
                });
            });
            $('#search-btn').prop('disabled', false);
        });

        $('#search-btn').on('click', function() {
            var id = $('#movie-select').val();
            location.replace(`#movieDetails&id=${id}`)
        })

        $('#name-search').on('keyup', function () {
            var name = $(this).val();
            var movies = movieStorage.getPlayingNowByName(name);
            var result = '';
            $("#movies").text('');
            movies.forEach(m => {
                result += `<option value="${m.title}">`;
            });
            $("#movies").append($(result));
        });

        $('#name-search-btn').on('click', function () {
            var name = $(this).prev().val();
            var movie = movieStorage.getIdByName(name);
            location.replace(`#movieDetails&id=${movie.id}`);
        });

    });    
}