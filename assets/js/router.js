MapaIn.Router = Backbone.Router.extend({
    routes:{
       ""   : "index",
    },

    initialize: function(){},
    
    index: function(){
        var indexView = new IndexView();
        var filersView = new FiltersView();
        var headerNavView = new HeaderNavView();
    },
});
