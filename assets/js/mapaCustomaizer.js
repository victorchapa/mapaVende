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

    var imageCasaVenta = new google.maps.MarkerImage("assets/img/house_red.png");
    var imageCasaRenta = new google.maps.MarkerImage("assets/img/house_green.png");
    var imageCasaTraspaso = new google.maps.MarkerImage("assets/img/house_yellow.png");

    var imageEdificioVenta = new google.maps.MarkerImage("assets/img/edificio_rojo.jpg");
    var imageEdificioRenta = new google.maps.MarkerImage("assets/img/edificio_verde.jpg");

    var imageLocalVenta = new google.maps.MarkerImage("assets/img/local_rojo.jpg");
    var imageLocalRenta = new google.maps.MarkerImage("assets/img/local_verde.jpg");

    var imageRanchVenta = new google.maps.MarkerImage("assets/img/rancho_rojo.jpg");
    var imageRanchRenta = new google.maps.MarkerImage("assets/img/rancho_verde.jpg");

    var imageTerrenoVenta = new google.maps.MarkerImage("assets/img/terreno_rojo.jpg");
    var imageTerrenoRenta = new google.maps.MarkerImage("assets/img/terreno_verde.jpg");

    _.each(data, function(propertie){
        var coordenades = propertie.Coordenadas.split(",");
        coordenades[0] = parseFloat(coordenades[0]);
        coordenades[1] = parseFloat(coordenades[1]);
        switch(propertie.TOperacion){
            case "Venta":
                switch(propertie.TPropiedad){
                    case "Casa":
                        var image = imageCasaVenta;
                        break;
                    case "Terreno":
                        var image = imageTerrenoVenta;
                        break;
                    case "Edificio":
                        var image = imageEdificioVenta;
                        break;
                    case "Local":
                        var image = imageLocalVenta;
                        break;
                    case "Oficina":
                        var image = imageEdificioVenta;
                        break;
                    case "Terreno comercial":
                        var image = imageTerrenoVenta;
                        break;
                    case "Terreno urbano":
                        var image = imageTerrenoVenta;
                        break;
                    case "Terreno campestre":
                        var image = imageTerrenoVenta;
                        break;
                    case "Bodega":
                        var image = imageLocalVenta;
                        break;
                    case "Rancho":
                        var image = imageRanchVenta;
                        break;
                    case "Departamento":
                        var image = imageCasaVenta;
                        break;
                    case "Hotel":
                        var image = imageEdificioVenta;
                        break;
                }
                break;
            case "Renta":
                switch(propertie.TPropiedad){
                    case "Casa":
                        var image = imageCasaRenta;
                        break;
                    case "Terreno":
                        var image = imageTerrenoRenta;
                        break;
                    case "Edificio":
                        var image = imageEdificioRenta;
                        break;
                    case "Local":
                        var image = imageLocalRenta;
                        break;
                    case "Oficina":
                        var image = imageEdificioRenta;
                        break;
                    case "Terreno comercial":
                        var image = imageTerrenoRenta;
                        break;
                    case "Terreno urbano":
                        var image = imageTerrenoRenta;
                        break;
                    case "Terreno campestre":
                        var image = imageTerrenoRenta;
                        break;
                    case "Bodega":
                        var image = imageLocalRenta;
                        break;
                    case "Rancho":
                        var image = imageRanchRenta;
                        break;
                    case "Departamento":
                        var image = imageCasaRenta;
                        break;
                    case "Hotel":
                        var image = imageEdificioRenta;
                        break;
                }
                break;
            case "Traspaso":
                var image = imageCasaTraspaso;
                break;
        }

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

            var counter = 0;
            var templateProper = TEMPLATES.property;
            var templateContact = TEMPLATES.contact;
            var compilatedTemplateP = _.template($(templateProper).html());
            var compilatedTemplateC = _.template($(templateContact).html());
            var id = $(".idProperty").val();
            var propertyModel = new PropertyModel(id);
            propertyModel.fetch({
                success: function(data){
                    var data = data.toJSON();
                    var property = {property: data[0]};
                    var propertyId = {propertyId: data[0].IdPropiedad};
                    $("#modalDisplayer1").html(compilatedTemplateP(property));
                    $("#modalDisplayer2").html(compilatedTemplateC(propertyId));
                },
            });
            $(".moreDetails").on("click", function(){

                MyFunctions.addEventsToValidation();
                $(".modal-dialog").removeAttr("style");
                $("#modalDisplayer1").removeAttr("style");
                $("#modalDisplayer2").hide();
                $("#Modal").modal("show");
                $(".showMorePhotos").on("click", function(){
                    $(".imgGroup").show("slow");
                });
                $("#showContactForm").on("click", function(){
                    $(".modal-dialog").animate({
                        width: "850px",
                    }, 1000);
                    $("#modalDisplayer1").animate({
                        width: "60%",
                    }, 1000);
                    $("#modalDisplayer1").css({
                        float: "left",
                    });
                    window.setTimeout(function(){
                        $("#modalDisplayer2").show("slow");
                    }, 1500);
                });

                $("#nextImg").on("click", function(e){
                    var marginLeft = $("ul", ".imgGroup").css("margin-left");
                    marginLeft = marginLeft.split("px");
                    marginLeft = parseFloat(marginLeft[0]);
                    if(marginLeft == 0){
                        counter = -150;
                    }else if(counter > -300){
                        counter = counter - 150;
                    }
                    if(marginLeft > -300){
                        $("ul", ".imgGroup").css({
                            marginLeft: counter+ "px",
                        });
                    }
                });

                $("#backImg").on("click", function(e){
                    var marginLeft = $("ul", ".imgGroup").css("margin-left");
                    marginLeft = marginLeft.split("px");
                    marginLeft = parseFloat(marginLeft[0]);
                    if(marginLeft == 0){
                        counter = 150;
                    }else if(counter < 0){
                        counter = counter + 150;
                    }
                    if(marginLeft < 0){
                        $("ul", ".imgGroup").css({
                            marginLeft: counter + "px",
                        });
                    }
                });

            });

        });

    });
}
