function Zala(redove, mesta){
    this.salon = [[]];
    for(var row = 0; row < redove; row++){
        for(var col = 0; col < mesta; col++){
            this.salon[row][col] = false;
        }
    }
}

//малко нямам идея :/
Zala.prototype.bookingPlaces = function(mesta){

}