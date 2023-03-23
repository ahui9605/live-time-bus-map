let map, infoWindow, popup, Popup;

//bus station location add
//Kellogg:38.90729555131052, -76.994978865475591
//benson: 38.908150, -76.992013
//MSSD:38.910527327002825, -76.9908085230198
//Kendall: 38.90875280225683, -76.9898450530593
//Union Station: 38.89906296251516, -77.00678908166684

const busStops = [
  [{ lat: 38.90729555131052, lng: -76.994978865475591 }, "Kellogg"],
  [{ lat: 38.908150, lng: -76.992013 }, "Benson"],
  [{ lat: 38.910527327002825, lng: -76.9908085230198 }, "MSSD"],
  [{ lat: 38.90875280225683, lng: -76.9898450530593 }, "Kendall "],
  [{ lat: 38.89906296251516, lng: -77.00678908166684 }, "Union Station"],
];


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
    styles: [ //hide google map default marker
      {
        featureType: "transit.station",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      }, {
        featureType: "administrative",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }],
      },
    ],
  });


  //-----------------------------------------------------------------------------------------------
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  busStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`,
      label: {
        text: `${i + 1}`,
        fontWeight: 'bold',
        //fontColor: 'green'
      },
      optimized: true,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });

  //-----------------------------------------------------------------------------------------------
  var positions = [
    //temp bus real time location is moving
    new google.maps.LatLng(38.9075613687001, -76.9949769699535),
    new google.maps.LatLng(38.90795892668869, -76.99435103030744),
    new google.maps.LatLng(38.908660214572144, -76.9934498081432),
    new google.maps.LatLng(38.90848489324996, -76.99249494179155),
    new google.maps.LatLng(38.907833695977324, -76.99197995769185),
    new google.maps.LatLng(38.908501238914695, -76.99101418160207),
    new google.maps.LatLng(38.90894788989595, -76.99021488337306),
    new google.maps.LatLng(38.90882266093239, -76.98983400972031),
    new google.maps.LatLng(38.90915247777048, -76.9905650499479),
    new google.maps.LatLng(38.90988027076345, -76.99173678958903),
    new google.maps.LatLng(38.91048512440389, -76.99242104165376),
    new google.maps.LatLng(38.91075644719108, -76.99121941210143),
    new google.maps.LatLng(38.91055805850263, -76.99081302141897),
    new google.maps.LatLng(38.91054504273677, -76.99074133412495),
    new google.maps.LatLng(38.910740388270916, -76.99170540678297),
    new google.maps.LatLng(38.910300208766664, -76.99186294084114),
    new google.maps.LatLng(38.90939496496062, -76.99178527104102),
    new google.maps.LatLng(38.90868558152688, -76.99331379155102),
    new google.maps.LatLng(38.90764199614956, -76.99457979419628),
    new google.maps.LatLng(38.90668188403467, -76.99558830478432),
    new google.maps.LatLng(38.905805248613525, -76.99613547541796),
    new google.maps.LatLng(38.90537110134246, -76.99471926906985),
    new google.maps.LatLng(38.90486726895425, -76.99485532121102),
    new google.maps.LatLng(38.90377032578141, -76.99497239677302),
    new google.maps.LatLng(38.90212159397084, -76.99496500065592),
    new google.maps.LatLng(38.90028260673965, -76.99496500065592),
    new google.maps.LatLng(38.90022264080792, -76.9980087784482),
    new google.maps.LatLng(38.90032121370849, -77.00414022053393),
    new google.maps.LatLng(38.90018360057705, -77.00680868558864),
    new google.maps.LatLng(38.89913776906941, -77.00708458264536),
    new google.maps.LatLng(38.89913776906941, -77.00708458264536),
    new google.maps.LatLng(38.90018360057705, -77.00680868558864),
    new google.maps.LatLng(38.90032121370849, -77.00414022053393),
    new google.maps.LatLng(38.90022264080792, -76.9980087784482),
    new google.maps.LatLng(38.90028260673965, -76.99496500065592),
    new google.maps.LatLng(38.90212159397084, -76.99496500065592),
    new google.maps.LatLng(38.90377032578141, -76.99497239677302),
    new google.maps.LatLng(38.90486726895425, -76.99485532121102),
    new google.maps.LatLng(38.90537110134246, -76.99471926906985),
    new google.maps.LatLng(38.905805248613525, -76.99613547541796),
    new google.maps.LatLng(38.90668188403467, -76.99558830478432),
    new google.maps.LatLng(38.90764199614956, -76.99457979419628),
    new google.maps.LatLng(38.90868558152688, -76.99331379155102),
    new google.maps.LatLng(38.90939496496062, -76.99178527104102),
    new google.maps.LatLng(38.910300208766664, -76.99186294084114),
    new google.maps.LatLng(38.910740388270916, -76.99170540678297),
    new google.maps.LatLng(38.91054504273677, -76.99074133412495),
    new google.maps.LatLng(38.91055805850263, -76.99081302141897),
    new google.maps.LatLng(38.91075644719108, -76.99121941210143),
    new google.maps.LatLng(38.91048512440389, -76.99242104165376),
    new google.maps.LatLng(38.90988027076345, -76.99173678958903),
    new google.maps.LatLng(38.90915247777048, -76.9905650499479),
    new google.maps.LatLng(38.90882266093239, -76.98983400972031),
    new google.maps.LatLng(38.90894788989595, -76.99021488337306),
    new google.maps.LatLng(38.908501238914695, -76.99101418160207),
    new google.maps.LatLng(38.907833695977324, -76.99197995769185),
    new google.maps.LatLng(38.90848489324996, -76.99249494179155),
    new google.maps.LatLng(38.908660214572144, -76.9934498081432),
    new google.maps.LatLng(38.90795892668869, -76.99435103030744),
    new google.maps.LatLng(38.9075613687001, -76.9949769699535)
  ];

  var bus1_initialPosition = new google.maps.LatLng(37.7749, -122.4194);
  var bus1_marker = new google.maps.Marker({
    position: bus1_initialPosition,
    map: map,
    icon: {
      url: 'https://cdn3.iconfinder.com/data/icons/transport-29/100/14-512.png',
      scaledSize: new google.maps.Size(50, 50)

    }
  });

  var busInfoWindow = new google.maps.InfoWindow({
    content: "Bus 1"
  });

  // Add a click listener for the bus marker
  bus1_marker.addListener('click', function () {
    busInfoWindow.open(map, bus1_marker);
  });

  var index = 0;

  // Update the marker position every 6 seconds
  setInterval(function () {
    // Increment the index
    index = (index + 1) % positions.length;

    // Set the marker position to the next position in the array
    bus1_marker.setPosition(positions[index]);
  }, 1000);


  //-----------------------------------------------------------------------------------------------
  //check user current location 
  const currentLocation = new google.maps.InfoWindow();

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
          currentLocation.setPosition(pos);
          currentLocation.setContent("Location found.");
          currentLocation.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, currentLocation, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, currentLocation, map.getCenter());
    }
  });


  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    currentLocation.setPosition(pos);
    currentLocation.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    currentLocation.open(map);
  }

  //map called
  window.initMap = initMap;
}


//校车时间表提供多标签点击
// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks;

//   // 获取所有tab内容并隐藏它们
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // 获取所有tab按钮并移除激活状态
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // 显示当前选中的tab内容并将对应的tab按钮设置为激活状态
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }




  //自定义marker图片并部署用户点击事件到加入新marker在地图上
  // var image = {
  //   url: 'https://i.pinimg.com/originals/83/14/ed/8314edb1b45744f0e48c5ceedd223218.png', // replace with the URL of your image
  //   scaledSize: new google.maps.Size(25, 25), // replace with the size of your image
  // };

  // // var labelText = 'Hotel Location';

  // var marker = new google.maps.Marker({
  //   position: { lat: 38.90729555131052, lng: -76.994978865475591 },
  //   map: map,
  // });

  // map.addListener("click", function (event) {
  //   addMarker(event.latLng);
  // });

  // function addMarker(location) {
  //   clearMarkers();
  //   var marker = new google.maps.Marker({
  //     position: location,
  //     map: map,
  //   });
  //   markers.push(marker);
  // }

  // function clearMarkers() {
  //   markers.forEach(function (marker) {
  //     marker.setMap(null);
  //   });
  //   markers = [];
  // }
  // var GallayLocation = new google.maps.LatLng(38.908438, -76.992401);
  // addMarker(GallayLocation);
