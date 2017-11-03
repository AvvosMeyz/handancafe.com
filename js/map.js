AOS.init({
    disable: 'mobile',
    duration: 1000
});

var map;
function initMap() {
    var my_loc = {lat: 38.392973, lng: 27.038170};
    map = new google.maps.Map(document.getElementById('googleMap'), {
    center: my_loc,
    zoom: 15
    
});
var marker = new google.maps.Marker({
      position: my_loc,
      map: map
    });
}