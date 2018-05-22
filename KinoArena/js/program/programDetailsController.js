function programDetailsController(id) {
    var source = document.getElementById('program-template').innerHTML;
    var template = Handlebars.compile(source);

    cinemaStorage.getCinemaById(id).then(cinema => {
        var html = template({ cinemaProgram: cinema.screens });
        document.querySelector('#wrapper').innerHTML = html;
        
        $('#program-cinema li a').on('click', function () {
            document.querySelector('#program-list').innerHTML = '';
            screens = cinema.screens.slice();
            
            var $this = $(this);
            var day = screens.find(d => d.date === $this.text().split(',')[0]);
            console.log(day);
            day.movies.forEach(el => {
                movieStorage.getMovieById(el.movie.id).then(movie => {
                    el.movie = movie;
                    source = document.getElementById('program-list-template').innerHTML;
                    template = Handlebars.compile(source);
            
                    html = template(el);
                    document.querySelector('#program-list').innerHTML += html;
                });
            });

        });
    });
}