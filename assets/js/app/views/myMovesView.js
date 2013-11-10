var MyMovesView = Backbone.View.extend({
    
    el: "body",

    events: {
        "click .showProperty" :     "showProperty",
    },

    initialize: function(){},

    showProperty: function(e){
        var template = TEMPLATES.propertyMovimientos;
        var compiledTemplate = _.template($(template).html());
        var id = $(e.target).attr("idproperty");
        var propertyModel = new PropertyModel(id);
        propertyModel.fetch({
            success: function(data){
                var data = data.toJSON();
                data = data[0];
                var property = {property: data};
                $("#modalMovimientosDisplayer").html(compiledTemplate(property));
                $("#modalMovimientos").modal("show");
            },
        });
    },
});
