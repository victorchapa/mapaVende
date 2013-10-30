MapaIn.Router = Backbone.Router.extend({
    routes:{
       ""   : "index",
    },

    initialize: function(){},
    
    index: function(){
        console.log("At index!!");
    },
});
