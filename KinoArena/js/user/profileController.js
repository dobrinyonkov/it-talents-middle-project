function profileController() {
    var source = document.getElementById('profile-template').innerHTML;
    var template = Handlebars.compile(source);

    var html = template({user: userService.currentLogged});
    console.log(html);
    document.querySelector('#wrapper').innerHTML = html;
}