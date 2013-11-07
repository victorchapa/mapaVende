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
    allPropertiesMarkers = new Array();
    var image = new google.maps.MarkerImage("assets/img/house_green.png");

    _.each(data, function(propertie){
        var coordenades = propertie.Coordenadas.split(",");
        coordenades[0] = parseFloat(coordenades[0]);
        coordenades[1] = parseFloat(coordenades[1]);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(coordenades[0], coordenades[1]),
            map: mapTable.map,
            idPropiedad: propertie.IdPropiedad,
            icon: image,
            tOperacion: propertie.TOperacion,
            tPropiedad: propertie.TPropiedad,
            antiguedad: propertie.Antiguedad,
            precio: propertie.Precio,
            habitaciones: propertie.Cuarto,
        });

        allPropertiesMarkers.push(marker);

        if(propertie.Foto1 != ""){
            var contentString = '<div class="infoArea">'+
            '<div class="imgInfo">' +
            '<img src="thumb.php?file=/api/'+ propertie.Foto1 + '&width=150">' +
            '</div>' +
            '</div>' +
            '<div class="infoData">'+
            '<p>Precio: $'+ propertie.Precio + " (" + propertie.TOperacion + ")</p>"+
            '</div>'+
            '<div class="interaction">'+
            '<input class="idProperty" type="hidden" value="'+ propertie.IdPropiedad+'">' +
            '<input class="btn btn-details moreDetails" type="button" value="Más detalles">'+
            '</div>'+
            '</div>';
        }else{
            var contentString = '<div class="infoArea">'+
            '<div class="imgInfo">' +
            '<img src="assets/img/noPhoto.png">' +
            '</div>' +
            '</div>' +
            '<div class="infoData">'+
            '<p>Precio: $'+ propertie.Precio + " (" + propertie.TOperacion + ")</p>"+
            '</div>'+
            '<div class="interaction">'+
            '<input class="idProperty" type="hidden" value="'+ propertie.IdPropiedad+'">' +
            '<input class="btn btn-details moreDetails" type="button" value="Más detalles">'+
            '</div>'+
            '</div>';
        }

        var markerInfo = new google.maps.InfoWindow({
            content: contentString,
        });

        google.maps.event.addListener(marker, "click", function(){
            markerInfo.open(marker.get('map'), marker);
        });
        
        google.maps.event.addListener(markerInfo, "domready", function(){

            var template = TEMPLATES.property;
            var compilatedTemplate = _.template($(template).html());
            var id = $(".idProperty").val();
            var propertyModel = new PropertyModel(id);
            propertyModel.fetch({
                success: function(data){
                    var data = data.toJSON();
                    var property = {property: data[0]};
                    $("#modalDisplayer").html(compilatedTemplate(property));
                },
            });
            $(".moreDetails").on("click", function(){
                $("#Modal").modal("show");
                $(".showMorePhotos").on("click", function(){
                    $(".imgGroup").show("slow");
                });
            });

        });

    });
}
