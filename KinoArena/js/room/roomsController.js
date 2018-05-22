function roomsController() {
    var source = document.getElementById('rooms-template').innerHTML;
    var template = Handlebars.compile(source);

    roomstorage.getRooms().then(data => {

        var name = location.hash.slice(1).split('-')[0];
        var room = data.find(el => el.room == name);

        var html = template({ room: room });

        document.querySelector('#wrapper').innerHTML = html;

        document.getElementById("room-name").innerHTML = "<h1>КИНО АРЕНА " + room.room.toUpperCase() + "</h1>";

        document.getElementById(room.room + "").style.display = "block";

        switch (room.room) {
            case "imax":
                imaxFunction(room);
                break;
            case "premium":
                premiumFunction(room);
                break;
            case "luxe":
                luxeFunction(room);
                break;
            case "vip":
                vipFunction(room);
                break;
        }

    });

    function vipFunction(room) {
        var li = document.querySelectorAll("#vip > nav > div > ul li");

        li[0].addEventListener("click", function () {

            movieStorage.getAllPlayingNow().then(function (data) {
                var endHtml = "";
                data.forEach(element => {
                    var source = document.getElementById("program-list-template").innerHTML;
                    var template = Handlebars.compile(source);

                    var html = template({ movie: element });

                    endHtml += html;
                });
                document.getElementById("info").innerHTML = endHtml;

                $('.movie-item').on('click', function () {
                    console.log(this.id);
                    location.replace(`#movieDetails&id=${this.id}`)
                });
            });
        });

        li[1].addEventListener("click", function () {
            document.querySelector(".carousel-inner").innerHTML =
                "<div class='carousel-item active'><img src='assets/images/rooms/vip/barImg.jpg' alt='room1' ></div>";

            var source = document.getElementById('vipBar').innerHTML;
            var template = Handlebars.compile(source);

            var html = template({ room: room });

            document.querySelector('#info').innerHTML = html;
        });
    }

    function luxeFunction(room) {
        var li = document.querySelectorAll("#luxe > nav > div > ul li");

        li[0].addEventListener("click", function () {

            movieStorage.getAllPlayingNow().then(function (data) {
                var endHtml = "";
                data.forEach(element => {
                    var source = document.getElementById("program-list-template").innerHTML;
                    var template = Handlebars.compile(source);

                    var html = template({ movie: element });

                    endHtml += html;
                });
                document.getElementById("info").innerHTML = endHtml;
                
                $('.movie-item').on('click', function () {
                    console.log(this.id);
                    location.replace(`#movieDetails&id=${this.id}`)
                });
            });
        });

        li[1].addEventListener("click", function () {
            document.querySelector(".carousel-inner").innerHTML =
                "<div class='carousel-item active'><img src=" + room.glasses.glassImg + " alt='room1' ></div>";

            var source = document.getElementById('luxeGlass').innerHTML;
            var template = Handlebars.compile(source);

            var html = template({ room: room });

            document.querySelector('#info').innerHTML = html;
        });

        li[2].addEventListener("click", function () {
            document.querySelector(".carousel-inner").innerHTML =
                "<div class='carousel-item active'><img src=" + room.reald.img + " alt='room1' ></div>";

            var source = document.getElementById('luxeExperience').innerHTML;
            var template = Handlebars.compile(source);

            var html = template({ room: room });

            document.querySelector('#info').innerHTML = html;
        });

        li[3].addEventListener("click", function () {

            document.querySelector(".carousel-inner").innerHTML =
                "<div class='carousel-item active'><img src='assets/images/rooms/luxe/videoImg.jpg' alt='room1' ></div>";

            var source = document.getElementById('video').innerHTML;
            var template = Handlebars.compile(source);

            var html = template({ room: room });

            document.querySelector('#info').innerHTML = html;
        });



    }

    function premiumFunction(room) {
        var li = document.querySelectorAll("#premium > nav > div > ul li");

        li[0].addEventListener("click", function () {

            movieStorage.getAllPlayingNow().then(function (data) {
                var endHtml = "";
                data.forEach(element => {
                    var source = document.getElementById("program-list-template").innerHTML;
                    var template = Handlebars.compile(source);

                    var html = template({ movie: element });

                    endHtml += html;
                });
                document.getElementById("info").innerHTML = endHtml;
                
                $('.movie-item').on('click', function () {
                    console.log(this.id);
                    location.replace(`#movieDetails&id=${this.id}`)
                });
            });
        });

        li[1].addEventListener("click", function () {

            document.querySelector(".carousel-inner").innerHTML =
                "<div class='carousel-item active'><img src=" + room.premImg + " alt='room1' ></div>";

            var source = document.getElementById('preTechology').innerHTML;
            var template = Handlebars.compile(source);

            var html = template({ room: room });
            console.log(room);
            document.querySelector('#info').innerHTML = html;
        });


        li[2].addEventListener("click", function () {

            document.querySelector(".carousel-inner").innerHTML =
                "<div class='carousel-item active'><img src='assets/images/rooms/premium/videoImg.jpg' alt='room1' ></div>";

            var source = document.getElementById('video').innerHTML;
            var template = Handlebars.compile(source);

            var html = template({ room: room });

            document.querySelector('#info').innerHTML = html;
        });


    }

    function imaxFunction(room) {
        var li = document.querySelectorAll("#imax > nav > div > ul li");

        li[0].addEventListener("click", function () {

            movieStorage.getAllPlayingNow().then(function (data) {
                var endHtml = "";
                data.forEach(element => {
                    var source = document.getElementById("program-list-template").innerHTML;
                    var template = Handlebars.compile(source);

                    var html = template({ movie: element });

                    endHtml += html;
                });
                document.getElementById("info").innerHTML = endHtml;
                
                $('.movie-item').on('click', function () {
                    console.log(this.id);
                    location.replace(`#movieDetails&id=${this.id}`)
                });
            });
        });

        li[1].addEventListener("click", function () {

            document.querySelector(".carousel-inner").innerHTML =
                "<div class='carousel-item active'><img src=" + room.glassImg + " alt='room1' ></div>";

            var source = document.getElementById('imax-glass').innerHTML;
            var template = Handlebars.compile(source);

            var html = template({ room: room });

            document.querySelector('#info').innerHTML = html;
        });


        li[2].addEventListener("click", function () {

            document.querySelector(".carousel-inner").innerHTML =
                "<div class='carousel-item active'><img src=" + room.realityImg + " alt='room1' ></div>";

            var source = document.getElementById('imax-reality').innerHTML;
            var template = Handlebars.compile(source);

            var html = template({ room: room });

            document.querySelector('#info').innerHTML = html;
        });

        li[3].addEventListener("click", function () {

            document.querySelector(".carousel-inner").innerHTML =
                "<div class='carousel-item active'><img src='assets/images/rooms/imax/i-1.jpg' alt='room1' ></div>";

            var source = document.getElementById('video').innerHTML;
            var template = Handlebars.compile(source);

            var html = template({ room: room });

            document.querySelector('#info').innerHTML = html;
        });
    }

}
