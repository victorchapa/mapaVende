function placeMarker(position, mapTable, markerSaver){ 

    var marker = new google.maps.Marker({
        position: position,
        map: mapTable.map,
    });

    markerSaver.push(marker);
    mapTable.map.panTo(position);
    console.log(marker.position);
    return markerSaver;
};

function mapApplication(){

    // Bugger for get coordenates of googlemaps and fix bad street view markers.
    //var markerSaver = [];
    //google.maps.event.addListener(mapTable.map, 'click', function(e){
        //if(markerSaver.length == 1){
            //markerSaver[0].setMap(null);
            //markerSaver = new Array();
        //}
        //placeMarker(e.latLng, mapTable, markerSaver);
    //});
    //--------------------------------------------------------------------------
}

function drawingMarkers(data){
    console.log(data);
    var allPropertiesMarkers = new Array();
    var image = new google.maps.MarkerImage("assets/img/house_green.png");
    _.each(data, function(properties){

        var coordenades = properties.Coordenadas.split(",");
        coordenades[0] = parseFloat(coordenades[0]);
        coordenades[1] = parseFloat(coordenades[1]);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(coordenades[0], coordenades[1]),
            map: mapTable.map,
            idPropiedad: properties.IdPropiedad,
            icon: image
        });

        allPropertiesMarkers.push(marker);
    });

    console.log(allPropertiesMarkers);
}
