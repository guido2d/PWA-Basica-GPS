function obtenerCoords() {
    
    this.log('Entre a la función obtenerCoords.');

    var startPos;
    var geoSuccess = function (position) {
        this.log('Pase al geoSuccess.');
        startPos = position;
        document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };
    
    var geoError = function (error) {
        
        this.log('Pase al geoError.');

        this.log('Error occurred. Error code: ' + error.code);
        // error.code can be:
        this.log('0: unknown error');
        this.log('1: permission denied');
        this.log('2: position unavailable (error response from location provider)');
        this.log('3: timed out');
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

function log(texto){
    $('.consola').append(`<span>${texto}</span>`);
}