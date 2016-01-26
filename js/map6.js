var poligono = [
	new google.maps.LatLng(41.3788696258852, 2.1752934374999313),
	new google.maps.LatLng(41.14763810202612, 1.1041264453124313),
	new google.maps.LatLng(41.72828039782993, 1.8237309374999313)
];
var catalunya = new google.maps.LatLng(41.652393,1.691895);
var options = {
	center: catalunya,
	zoom: 8,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
 
miPoligono = new google.maps.Polygon({
  paths: poligono,
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 3,
  fillColor: "#FF0000",
  fillOpacity: 0.4
});

var infowindow_poligono = new google.maps.InfoWindow({
                position: poligono[0],
                content:'<h3>Polígono</h3> \
                        <p>Entre tres ciudades</p> \
                        <p>Resultado.</p> '
             });

function initialize6(){
    var map6 = new google.maps.Map(document.getElementById('map6'), options);
    miPoligono.setMap(map6);
    google.maps.event.addListener(miPoligono, 'click', function() {
        infowindow_poligono.open(map6,miPoligono);
    });
}