var marcadores = [
    ['BARCELONA',41.385064,2.173404,'Barcelona'],
    ['TARRAGONA',41.119019,1.245212,'Tarragona'],
    ['GIRONA',41.9794,2.821426,'Girona'],
    ['LLEIDA',41.60034,0.609762,'Lleida'],
];
 
var infowindow;
function setMarkers(map, marcadores) {
    for (var i = 0; i < marcadores.length; i++) {
        var myLatLng = new google.maps.LatLng(marcadores[i][1], marcadores[i][2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: marcadores[i][0],
        });
        (function(j, marcador) { //  aislamos j y marcador de esta función, de la i y marker del bucle, usando un closure
            google.maps.event.addListener(marcador,'click',function() {
                if (!infowindow) {
                    infowindow = new google.maps.InfoWindow();
                }
                infowindow.setContent(marcadores[j][3]);
                infowindow.open(map, marcador);
                });
        })(i, marker);
    }
};

function initialize5() {
    var latlng = new google.maps.LatLng(41.652393,1.691895);
    var mapOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    var map5 = new google.maps.Map(document.getElementById('map5'), mapOptions);
    setMarkers(map5, marcadores);
}
