function navBarController() {
    var source = document.getElementById('navbar-template-not-logged').innerHTML;
    if (sessionStorage.getItem('isLogged') == 'true') {
        // console.log(typeof sessionStorage.getItem('isLogged'));
        source = document.getElementById('navbar-template-logged').innerHTML;
    }
    var template = Handlebars.compile(source);

    var html = template({user: userService.returnUser(sessionStorage.getItem('user'))});

    document.querySelector('#nav').innerHTML = html;
    
    if (document.getElementById('exit-btn')) {
        document.getElementById('exit-btn').addEventListener('click', function(){
        sessionStorage.setItem('isLogged', false);
        location.reload(true);
        }); 
    }

    $(".nav-link").on("click", function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
    });

    document.getElementById('home').addEventListener('click', function name(params) {
        location.replace('#home');
    }, false);

    document.getElementById('cinemas').addEventListener('click', function name(params) {
        location.replace('#cinemas');
    }, false);

    document.getElementById('register').addEventListener('click', function name(params) {
        location.replace('#register');
    }, false);

    document.getElementById('login').addEventListener('click', function name(params) {
        location.replace('#login');
    }, false);

    document.getElementById('imax-room').addEventListener('click', function name(params) {
        location.replace('#imax-room');
    }, false);

    document.getElementById('premium-room').addEventListener('click', function name(params) {
        location.replace('#premium-room');
    }, false);

    document.getElementById('luxe-room').addEventListener('click', function name(params) {
        location.replace('#luxe-room');
    }, false);

    document.getElementById('vip-room').addEventListener('click', function name(params) {
        location.replace('#vip-room');
    }, false);

    document.getElementById('cinemas').addEventListener('click', function name(params) {
        location.replace('#cinemas');
    }, false);

    document.getElementById('program').addEventListener('click', function name(params) {
        location.replace('#program');
    }, false);

    if (sessionStorage.getItem('isLogged') == 'true') {
        document.getElementById('favoriteMovies').addEventListener('click', function name(params) {
            location.replace('#favoriteMovies');
        }, false);

        document.getElementById('profile').addEventListener('click', function name(params) {
            location.replace('#profile');
        }, false);
    }
}