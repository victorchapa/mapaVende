var FiltersView = Backbone.View.extend({
    el: "#filters",

    events:{},

    initialize: function(){
        console.log("YEAH!");
        this.render();
    },

    render: function(){
        var template = TEMPLATES.filters;
        var compiledTemplate = _.template($(template).html());
        $("#filters").html(compiledTemplate);
        $(".sliderP").slider({
            range: true,
            min: 0,
            max: 500,
            values: [100, 250],
            slide: function(event, ui){
                $("#priceChecker").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#priceChecker").val("$" + $(".sliderP").slider("values", 0) + " - $" + $(".sliderP").slider("values", 1));
        $(".sliderH").slider({
            range: true,
            min: 1,
            max: 6,
            values: [2, 4],
            slide: function(event, ui){
                $("#habChecker").val(ui.values[0] + " - " + ui.values[1]);
            }
        });
        $("#habChecker").val($(".sliderH").slider("values", 0) + " - " + $(".sliderH").slider("values", 1));
    },
});
