function cinemasController() {
    var source = document.getElementById('cinemas-template-3x2').innerHTML;
    var template = Handlebars.compile(source);
    var isFirstGrid = false;

    cinemaStorage.getCinemas().then(data => {
        var html = template({ cinemas: data });
        document.querySelector('#wrapper').innerHTML = html;

        // document.getElementById('grid-btn').addEventListener('click', function () {
        //     console.log(this);
        // })

        $('#grid-btn').on('click', function () {
            source = document.getElementById('cinemas-template-2x3').innerHTML;
            template = Handlebars.compile(source);
            html = template({ cinemas: data });
            document.querySelector('#wrapper').innerHTML = html;
        });
    });
}