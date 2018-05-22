function programController() {
    var source = document.getElementById('cinemas-template-3x2').innerHTML;
    var template = Handlebars.compile(source);

    cinemaStorage.getCinemas().then(data => {
        var html = template({cinemas: data});
        document.querySelector('#wrapper').innerHTML = html;
        console.log(data);
        $('#grid-btn').on('click', function () {
            source = document.getElementById('cinemas-template-2x3').innerHTML;
            template = Handlebars.compile(source);
            html = template({cinemas: data});
            document.querySelector('#wrapper').innerHTML = html;
            });

        $('li.cinema').on('click', function () {
            location.replace(`#programDetails&id=${this.id}`)
        })
    });
}