var map;

// Initialize and add the map
function initMap() {
    // The location of Buenos Aires
    var myLatlng = {
        lat: -34.6037389,
        lng: -58.3837591
    };
    // The map, centered at Buenos Aires
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 16,
            center: myLatlng
        });
    // The marker, positioned at Buenos Aires
}

function obtenerCoords() {

    this.log('Entre a la función obtenerCoords.');

    var startPos;
    var geoSuccess = function (position) {
        this.log('Pase al geoSuccess.');
        this.log('Lat: ' + position.coords.latitude);
        this.log('Lng: ' + position.coords.longitude);

        var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        addMark(geolocation);
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

function log(texto) {
    $('.consola').append(`<span>${texto}</span>`);
}

function addMark(location) {
    this.log('Entre al addMark().');

    map.setCenter(location);

    marker = new google.maps.Marker({
        position: location,
        map: map
    });

}