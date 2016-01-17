window.onload = function() {
var mapDiv = document.getElementById('map');
var catalunya = new google.maps.LatLng(41.652393,1.691895);
var options = {
center: catalunya,
zoom: 8,
mapTypeId: google.maps.MapTypeId.ROADMAP,
//el valor true desactiva la interfaz, el valor false (por defecto) la activa
disableDefaultUI: false,
//el valor false desactiva el mapTypeControl. Para mostrarlo debemos utilizar el valor true o no utilizar este atributo (por defecto el valor es true)
mapTypeControl: true,
//Definido el mapTypeControl como true, podemos establecer los valores para la propiedad mapTypeControlOptions
mapTypeControlOptions: {
    // DEFAULT, HORIZONTAL_BAR, DROPDOWN_MENU
    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    //Definimos la posición del control en la parte inferior central del mapa
    position: google.maps.ControlPosition.BOTTOM_CENTER,
    // Permitiremos al usuario escoger entre los siguientes dos tipos de mapa
    mapTypeIds: [
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.HYBRID
    ]
}
};
var mapa = new google.maps.Map(mapDiv, options);
}
