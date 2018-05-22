var userService = (function () {

    var count = 0;

    function User(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.id = ++count;
        this.favoriteMovies = [];
    }

    User.prototype.addFavoriteU = function (movieId) {
        this.favoriteMovies.push(movieId);
    }

    User.prototype.inMyFavorite = function (id) {
        return this.favoriteMovies.some(el => el == id);
    }

    User.prototype.getFavoriteMovies = function () {
        return this.favoriteMovies;
    }

    User.prototype.removeFavorite = function (id) {
        var index = this.favoriteMovies.findIndex(m => m == id);
        if (index != -1) {
            console.log(index);
            this.favoriteMovies.splice(index, 1);
        }
    }

    function UserStorage() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        // this.users.push(new User("yasemin@gmail.com", "yasemin", "123"));
        // this.users.push(new User("dobrin.yonkov1@gmail.com", "dobrin", "12345"));
        localStorage.setItem('users', JSON.stringify(this.users));
        // sessionStorage.setItem('isLogged', false);     
    }

    UserStorage.prototype.checkUser = function (email) {
        return (!!this.users.find((user) => user.email == email));
    }

    UserStorage.prototype.returnUser = function (email) {
        return this.users.find((user) => user.email == email);
    }

    UserStorage.prototype.register = function (email, username, password) {
        if (this.checkUser(email)) {
            throw new Error('an user with this username exists');
        }
        else {
            this.users.push(new User(email, username, password));
        }
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    UserStorage.prototype.login = function (email, password) {
        return this.users.find(function (user) {
            return user.email === email && user.password === password;
        });
    }

    UserStorage.prototype.getFavoriteMovies = function (userEmail) {
        var user = userService.returnUser(userEmail);
        return User.prototype.getFavoriteMovies.call(user);
    }

    UserStorage.prototype.addFavorite = function (userEmail, movieId) {
        var user = this.returnUser(userEmail);
        User.prototype.addFavoriteU.call(user, movieId);
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    UserStorage.prototype.removeFavorite = function (email, movieId) {
        var user = this.returnUser(email);

        User.prototype.removeFavorite.call(user, movieId);
    }

    UserStorage.prototype.inMyFavorite = function (email, id) {
        var user = this.returnUser(email);
        return User.prototype.inMyFavorite.call(user, id);

    }


    return new UserStorage();
})();
