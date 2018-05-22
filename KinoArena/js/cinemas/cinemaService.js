var cinemaStorage = (function () {
    function CinemaStorage() {
        this.cinemas = [];
    }
    
    CinemaStorage.prototype.getCinemas = function () {
        var self = this;
        return fetch('http://127.0.0.1:8080/KinoArena/js/json/cinemas.json')
        .then(r => r.json())
        .then(data => {
            self.cinemas = data;
            return self.cinemas;
        })
        .catch();
    }

    CinemaStorage.prototype.getCinemaById = function (id) {
        var self = this;
        return fetch('http://127.0.0.1:8080/KinoArena/js/json/cinemas.json')
        .then(r => r.json())
        .then(data => {
            var cinema = data.find(c => c.cinemaId == id);
            if (cinema) {
                return cinema;
            } else {
                throw new Error('No cinema with such id');
            }
        })
        .catch();
    }

    return new CinemaStorage();
})(); 