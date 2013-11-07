var HeaderNavView = Backbone.View.extend({
    
    el: ".navHeader",

    tagName: "p",

    events:{
        "click #newProperties"      :   "showNewProperties",
        "click #semiProperties"     :   "showSemiProperties",
        "click #comercialProper"    :   "showComercialProperties",
    },

    showNewProperties: function(e){
        console.log(e.target);
    },

    showSemiProperties: function(e){
        console.log(e.target);
    },

    showComercialProperties: function(e){
        console.log(e.target);
    },

});
