function initMap() {

    // Create a map object and specify the DOM element for display.
    var point = new google.maps.LatLng(50.460471, 30.646159);

    var myMapOptions = {
        zoom: 17,
        center: point,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('map'), myMapOptions);

    var image = {
        url: 'static/img/marker-images/pointer.png',
        size: new google.maps.Size(118,48),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(10,38)
    };

    var marker = new google.maps.Marker({
        draggable: false,
        raiseOnDrag: false,
        icon: image,
        map: map,
        position: point
    });
}