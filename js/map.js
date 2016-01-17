window.onload = function() {
var mapDiv = document.getElementById('map');
var catalunya = new google.maps.LatLng(41.652393,1.691895);
var options = {
center: catalunya,
zoom: 8,
mapTypeId: google.maps.MapTypeId.ROADMAP,
//el valor true desactiva la interfaz, el valor false (por defecto) la activa
disableDefaultUI: true
};
var mapa = new google.maps.Map(mapDiv, options);
}
