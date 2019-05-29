var map;

// Initialize and add the map

function initMap() {
    // The location of Buenos Aires
    var myLatlng = {lat: -34.6037389, lng: -58.3837591};
    // The map, centered at Buenos Aires
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: myLatlng});
    // The marker, positioned at Buenos Aires
  }

function geolocate() {
    alert('Pase a la función...');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            alert('Entree...');
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            console.log(geolocation);
            document.getElementById('coordenadas').innerHTML = `Lat: ${geolocation.lat}, Lng: ${geolocation.lng}`;
            // addMark(geolocation);

        });
    }
}

function addMark(location) {

    map.setCenter(location);

    marker = new google.maps.Marker({
        position: location,
        map: map
    });
            
}