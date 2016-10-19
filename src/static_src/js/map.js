function initMap() {

    // Create a map object and specify the DOM element for display.
    var point = new google.maps.LatLng(50.460682, 30.645524);

    var myMapOptions = {
        zoom: 16,
        center: point,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('map'), myMapOptions);

    var image = new google.maps.MarkerImage(
        'static/img/marker-images/image.png',
        new google.maps.Size(1534,559),
        new google.maps.Point(0,0),
        new google.maps.Point(26,68)
    );

    var shape = {
        coord: [29,0,33,1,35,2,37,3,39,4,40,5,42,6,43,7,44,8,44,9,45,10,46,11,47,12,47,13,48,14,48,15,48,16,49,17,49,18,49,19,50,20,50,21,50,22,50,23,50,24,50,25,50,26,50,27,50,28,50,29,49,30,49,31,49,32,48,33,48,34,48,35,47,36,47,37,46,38,46,39,45,40,45,41,44,42,43,43,43,44,42,45,42,46,41,47,40,48,39,49,39,50,38,51,37,52,36,53,36,54,35,55,34,56,33,57,32,58,32,59,34,60,36,61,36,62,36,63,36,64,35,65,33,66,28,67,22,67,17,66,15,65,14,64,14,63,14,62,15,61,16,60,19,59,18,58,17,57,16,56,15,55,15,54,14,53,13,52,12,51,11,50,11,49,10,48,9,47,9,46,8,45,7,44,7,43,6,42,6,41,5,40,4,39,4,38,3,37,3,36,3,35,2,34,2,33,1,32,1,31,1,30,1,29,0,28,0,27,0,26,0,25,0,24,0,23,0,22,1,21,1,20,1,19,1,18,1,17,2,16,2,15,3,14,3,13,4,12,4,11,5,10,6,9,7,8,8,7,9,6,10,5,11,4,13,3,15,2,17,1,22,0,29,0],
        type: 'poly'
    };

    var marker = new google.maps.Marker({
        draggable: false,
        raiseOnDrag: false,
        icon: image,
        shape: shape,
        map: map,
        position: point
    });
}