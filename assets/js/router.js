MapaIn.Router = Backbone.Router.extend({
    routes:{
       ""   : "index",
    },

    initialize: function(){},
    
    index: function(){
        var loginView = new LoginView();
    },
});
