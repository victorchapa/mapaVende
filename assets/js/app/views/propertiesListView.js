var PropertiesListView = Backbone.View.extend({
    
    el: "body",

    events: {
        "click .addProperty"    :   "addProperty",
        "click .editProperty"   :   "editProperty",
        "click .rmProperty"     :   "shutdownProperty",
    },

    initialize: function(){
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
                        $(".datePicker").datepicker();
                        $("#modalInmuebles").modal("show");
                    },
                });
            },
        });
    },

    shutdownProperty: function(e){
        var template = TEMPLATES.baja;
        var compilatedTemplate = _.template($(template).html());
        var id = $(e.target).attr("idproperty");
        var propertyModel = new PropertyModel(id);
        propertyModel.fetch({
            success: function(data){
                var data = data.toJSON();
                data = data[0];
                var property = {property: data};
                $("#modalInmueblesDisplayer").html(compilatedTemplate(property))
                $("#modalInmuebles").modal("show");
            },
        });
    },

});
