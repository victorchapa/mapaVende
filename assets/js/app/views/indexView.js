var IndexView = Backbone.View.extend({

    el: "#mainContainer",

    events: {},

    initialize: function(){
        $("#slider").slider();
        var propertiesCollection = new PropertiesCollection();
        propertiesCollection.fetch({
            success: function(data){
                var data = data.toJSON(); 
                drawingMarkers(data);
            },
        });
    },
});
