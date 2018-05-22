var roomstorage = (function(){

    function RoomsStotage(){
        this.rooms = [];
    }

    RoomsStotage.prototype.getRooms = function(){
        var self = this;
       return fetch('http://127.0.0.1:8080/KinoArena/js/json/rooms.json')
        .then(r => r.json())
        .then(data =>{
            self.rooms = data;
           return self.rooms;
        });
    }

    
    return new RoomsStotage();
})();