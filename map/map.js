(function() {

  var map;
  var init = function() {

    var position = new google.maps.LatLng(0, 0);

    var options = {
        zoom: 3,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapElement = document.getElementById("map");

    map = new google.maps.Map(mapElement, options);

    google.maps.event.addListener(map, "click", mapClick);//todo 引数でmapオブジェクトを渡せるか？
  };

  var mapClick = function(event) {
    mark(event);
    var geocoder = new google.maps.Geocoder();
    cp = event.latLng;
    var latLng = {latLng: cp};//todo global variable
    geocoder.geocode(latLng, getResult);
  };

  var mark = function(event) {
     var position = event.latLng;
     var pointer = {
        position: position,
        map: map,
        title: "destination"
     };
     var maker = new google.maps.Marker(pointer);
  };

  var getResult = function(response, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (response) {
        map.setCenter(cp);
        console.log(response[0].formatted_address);
      }

    } else {
      console.log('you cannot use geocoding');
    }
  };

  init();

}());
