let map, infoWindow, popup, Popup; // eslint-disable-line no-unused-vars

//create a new google map instance with personal api accont
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.902037, lng: -76.998016 }, // Washington DC coordinates
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: [],
    },

    zoom: 15,
    streetViewControl: false, // remove street view control
    zoomControl: true, // add zoom control
    mapTypeControl: true, // add map type control
    styles: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  var markers = [];

  map.addListener("click", function (event) {
    addMarker(event.latLng);
  });

  function addMarker(location) {
    clearMarkers();
    var marker = new google.maps.Marker({
      position: location,
      map: map,
    });
    markers.push(marker);
  }

  function clearMarkers() {
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];
  }

  infoWindow = new google.maps.InfoWindow();


  const locationButton = document.createElement("button");
  locationButton.textContent = "Current Location";
  locationButton.classList.add("custom-map-control-button");

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

  //map called
  window.initMap = initMap;
}
