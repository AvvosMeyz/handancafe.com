AOS.init({
    disable: 'mobile',
    duration: 1000
});

var map;
function initMap() {
    var dukkan = {lat: 38.392973, lng: 27.038170};
    map = new google.maps.Map(document.getElementById('googleMap'), {
    center: dukkan,
    zoom: 15
    
});
var marker = new google.maps.Marker({
      position: dukkan,
      map: map
    });
}