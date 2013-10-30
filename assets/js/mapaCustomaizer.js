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
