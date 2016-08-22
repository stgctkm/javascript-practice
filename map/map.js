(function() {
    var position = new google.maps.LatLng(0, 0);

    var options = {
        zoom: 2,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapElement = document.getElementById("map");

    var map = new google.maps.Map(mapElement, options);

}());

