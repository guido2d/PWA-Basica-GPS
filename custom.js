
function geolocate() {
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


//function that gets the location and returns it
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geo Location not supported by browser");
    }
}
//function that retrieves the position
function showPosition(position) {
    var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
    }
    alert(location)
}
//request for location
//   getLocation();