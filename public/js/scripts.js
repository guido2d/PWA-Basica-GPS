var map;
var marker;

function initApp() { 

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        alert("HTML5 Not Supported");
    }

};

function geoSuccess(position) {
    console.log('Pase al geoSuccess.');
    console.log('Lat: ' + position.coords.latitude);
    console.log('Lng: ' + position.coords.longitude);

    const geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    const styledMapType = new google.maps.StyledMapType(
        [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#263c3f"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#6b9a76"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#38414e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#212a37"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9ca5b3"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#1f2835"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#f3d19c"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2f3948"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#17263c"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#515c6d"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#17263c"
                }]
            }
        ], {
            name: 'Noche'
        });

    const mapOpt = {
        zoom: 16,
        center: geolocation,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'styled_map']
        },
        zoomControl: false,
        streetViewControl: false
    }

    const mapCont = document.getElementById('map');

    map = new google.maps.Map(mapCont, mapOpt);

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('roadmap');

    addMark(geolocation);

};

function geoError(error) {
    const errorType = {
        0: "Unknown Error",
        1: "Permission denied by the user",
        2: "Position of the user not available",
        3: "Request timed out"
    };

    const errMsg = errorType[error.code];

    if (error.code == 0 || error.code == 2) {
        errMsg = errMsg + " - " + error.message;
    }

    alert(errMsg);
}

function takeMyPosition() {

    var optn = {
        enableHighAccuracy: true,
        timeout: Infinity,
        maximumAge: 0
    };

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updateMark, geoError, optn);
    } else {
        alert("HTML5 Not Supported");
    }
}

function addMark(location) {

    map.setCenter(location);

    var image = new google.maps.MarkerImage(
        'https://gpx-tracking-platform.herokuapp.com/img/marker.svg',
        null, // size
        null, // origin
        new google.maps.Point(8, 8), // anchor (move to center of marker)
        new google.maps.Size(17, 17) // scaled size (required for Retina display icon)
    );

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: location,
        title: 'Mi ubicación',
        icon: image
    });

}

function updateMark(position){
    console.log('updateMark');
    const geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    const userPosition = new google.maps.LatLng(geolocation);

    marker.setPosition( userPosition );
    map.setCenter( userPosition );
}