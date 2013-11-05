var PropertyModel = Backbone.Model.extend({
    initialize: function(id){
        this.url = "api/models/property.php?id=" + id;
    },
});
