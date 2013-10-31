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

    // Bugger to get coordenates of googlemaps and fix wrong street view markers.
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

    _.each(data, function(propertie){
        var coordenades = propertie.Coordenadas.split(",");
        coordenades[0] = parseFloat(coordenades[0]);
        coordenades[1] = parseFloat(coordenades[1]);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(coordenades[0], coordenades[1]),
            map: mapTable.map,
            idPropiedad: propertie.IdPropiedad,
            icon: image
        });

        allPropertiesMarkers.push(marker);

        var contentString = '<div class="infoArea">'+
        '<div class="imgInfo">' +
        '<img src="api/'+ propertie.Foto1 + '">' +
        '</div>' +
        '</div>' +
        '<div class="infoData">'+
        '<p>Precio: $'+ propertie.Precio + " (" + propertie.TOperacion + ")</p>"+
        '</div>'+
        '<div class="interacition">'+
        '<a href="ver_propiedad.php?id=' + propertie.IdPropiedad + '">' +
        '<input class="btn btn-default moreDetails" type="button" value="Más detalles">'+
        '</a>' +
        '</div>'+
        '</div>';

        var markerInfo = new google.maps.InfoWindow({
            content: contentString,
        });

        google.maps.event.addListener(marker, "click", function(){
            markerInfo.open(marker.get('map'), marker);
        });

    });

    console.log(allPropertiesMarkers);
}
