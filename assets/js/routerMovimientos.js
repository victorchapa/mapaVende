MapaIn.Router = Backbone.Router.extend({
    routes:{
       ""   : "index",
    },

    initialize: function(){},
    
    index: function(){
        var myMovesView = new MyMovesView();
    },
});
