var MapaIn = {
    models: {},
    view: {},
    collections: {},

    initialize: function(){
        var router = new MapaIn.Router();
        Backbone.history.start({pushState: false});
    }
}

$(function(){
    MapaIn.initialize();
});
