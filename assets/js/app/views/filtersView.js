var FiltersView = Backbone.View.extend({
    el: "#filters",

    events:{
        "click .f1"     : "filterBy1",
        "click .f2"     : "filterBy2",
    },

    filterBy1: function(e){
        console.log(allPropertiesMarkers);
        var value = $(".f1 option:selected").val();
        if(value != "seleccionar"){
            var trueValue = value;
            _.each(allPropertiesMarkers, function(marker){
                if(marker.tOperacion != trueValue){
                    marker.setVisible(false);
                }else{
                    marker.setVisible(true);
                }
            });
        }
    },

    filterBy2: function(e){
        console.log(allPropertiesMarkers);
        var value = $(".f2 option:selected").val();
        if(value != "seleccionar"){
            var trueValue = value;
            _.each(allPropertiesMarkers, function(marker){
                if(marker.tPropiedad != trueValue){
                    marker.setVisible(false);
                }else{
                    marker.setVisible(true);
                }
            });
        }
    },

    initialize: function(){
        var self = this;
        var pricesCollection = new PricesCollection();
        pricesCollection.fetch({
            success: function(data){
                var data = data.toJSON();
                priceMayor = parseFloat(data[0].Precio); 
                priceMenor = parseFloat(data[data.length - 1].Precio);
                self.renderSliders(priceMayor, priceMenor);
            },
        });
        this.render();
    },

    renderSliders: function(priceMayor, priceMenor){
        $(".sliderP").slider({
            range: true,
            min: priceMenor,
            max: priceMayor,
            values: [priceMenor, priceMayor],
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

    render: function(){
        var template = TEMPLATES.filters;
        var compiledTemplate = _.template($(template).html());
        $("#filters").html(compiledTemplate);
    },
});
