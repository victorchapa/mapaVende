var PropertiesListView = Backbone.View.extend({
    
    el: "body",

    events: {
        "click .addProperty"    :   "addProperty",
        "click .editProperty"   :   "editProperty",
    },

    initialize: function(){
    },

    googleLoader: function(){
 var map      = null;
    var geocoder = null;
      map = new GMap2(document.getElementById("map"));
      map.setCenter(new GLatLng(19.23944127048188,-103.723670410115625), 15);
      map.addControl(new GSmallMapControl());
        map.addControl(new GMapTypeControl());
      geocoder = new GClientGeocoder();
          GEvent.addListener(map, "click",
            function(marker, point) {
                if (marker) {
          null;
        } else {
            map.clearOverlays();
                     var marcador = new GMarker(point);
                     map.addOverlay(marcador);
                     var puntos = point.y.toFixed(6)+","+point.x.toFixed(6);
                     document.form.coordenadas.value = String(puntos);
                    }
            }
             );
    },

    functionClicks: function(){
	    $('.cambiar').on('change', function(el){
            var id= $(el.target).val();
            if(id == 0){
                $(".municipio .muni").remove();
            }else{
                $.ajax({
                    type: 'POST',
                    url: 'api/municipio.php',
                    data:{
                        id_estado:id
                    },
                    success: function(obj){
                        $(".municipio .muni").remove();
                        _.each(obj, function(data){
                            $(".municipio").append("<option class='muni' value='"+data.id_municipio+"'>"+data.municipio+"</option>")

                        });
                    }
                });
            }
	    });
    },

    addProperty: function(){
        var self = this;
        var template = TEMPLATES.addProperty;
        var compiledTemplate = _.template($(template).html());
        var estadosCollection = new EstadosCollection();
        estadosCollection.fetch({
            success: function(data){
                var data = data.toJSON();
                var estados = {estados: data}
                $("#modalInmueblesDisplayer").html(compiledTemplate(estados));
                self.functionClicks();
                $(".datePicker").datepicker();
                $("#modalInmuebles").modal("show");
                self.googleLoader();
            },
        });
    },

    editProperty: function(e){
        var self = this;
        var template = TEMPLATES.editProperty;
        var compiledTemplate = _.template($(template).html());
        var id = $(e.target).attr("idproperty");
        var estadosCollection = new EstadosCollection();
        var propertyModel = new PropertyModel(id);
        propertyModel.fetch({
            success: function(data){
                var data = data.toJSON();
                data = data[0];
                estadosCollection.fetch({
                    success: function(estados){
                        data.estados = estados.toJSON();
                        var newData = {propertyData: data}
                        $("#modalInmueblesDisplayer").html(compiledTemplate(newData));
                        self.functionClicks();
                        $("#modalInmuebles").modal("show");
                        self.googleLoader();
                    },
                });
            },
        });
    },

});
