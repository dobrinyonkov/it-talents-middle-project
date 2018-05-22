


function loginController() {

    var sourse = document.getElementById('login-template');
    document.querySelector('#wrapper').innerHTML = sourse.innerHTML;

    //на конзолата работи
    document.getElementById('loginButton').addEventListener('click', function () {

        var email = document.getElementById("log-email").value;
        var pass = document.getElementById("log-password").value;
        if (userService.login(email, pass)) {
            sessionStorage.setItem('isLogged', true);
            sessionStorage.setItem('user', email);
            location.replace('#home');
        } else {
            alert("neuspeshno logvane");
        }
    }, false);
    
    document.getElementById('createButton').addEventListener('click', function(){
        location.replace('#register');
    });

    
}

function registerController() {
    var sourse = document.getElementById('register-template');
    document.querySelector('#wrapper').innerHTML = sourse.innerHTML;

    var div = document.getElementById('registerDiv');
    document.getElementById('regButton').addEventListener('click', function () {

        var input = div.querySelectorAll('div > input');
        if (Array.prototype.some.call(input, function (i) {
            return i.value == "";
        })) {
            alert("popalnete vsichki elementi");
            location.replace('#register');
        } else {
            var email = input[1].value;
            if (userService.checkUser(email)) {
                alert('ima takiv email');
            } else {
                if (input[2].value == input[3].value) {
                    userService.register(email, input[0].value, input[2].value);
                    
                    location.replace('#login');
                } else {
                    alert("parolite ne sa ednaklvi");
                }
            }
        }
    });
}