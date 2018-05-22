document.addEventListener('DOMContentLoaded', function () {

    navBarController();

    function router() {

        if (location.hash.split('&').length > 1) {
            var url = location.hash.slice(1).split('&');
            var page = url[0];
            var id = url[1].slice(3);
        } else {
            var page = location.hash.slice(1);
        }

        navBarController();


        switch (page) {
            case 'home':
                homeController();
                break;
            case 'login':
                loginController();
                break;
            case 'register':
                registerController();
                break;
            case 'movieDetails':
                movieDetailsController(id);
                break;
            case 'imax-room':
            case 'premium-room':
            case 'luxe-room':
            case 'vip-room':
                roomsController();
                break;
            case 'cinemas':
                cinemasController();
                break;
            case 'profile':
                profileController();
                break;
            case 'favoriteMovies':
                favoriteMovies();
                break;
            case 'program':
                programController();
                break;
            case 'programDetails':
                programDetailsController(id);
                break;
            default:
                homeController();
                break;
        }
    }


    window.addEventListener('hashchange', router);
    router();

}, false);