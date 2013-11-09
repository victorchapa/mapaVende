MapaIn.Router = Backbone.Router.extend({
    routes:{
       ""   : "index",
    },

    initialize: function(){},
    
    index: function(){
        var propertiesListView = new PropertiesListView();
    },
});
