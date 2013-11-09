var PropertiesListView = Backbone.View.extend({
    
    el: "body",

    events: {
        "click .addProperty"  : "addProperty",
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
                $("#modalInmuebles").modal("show");
            },
        });
    },

});
