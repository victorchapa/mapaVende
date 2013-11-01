var FiltersView = Backbone.View.extend({
    el: "#filters",

    events:{
        "click .f1"         : "filterBy1",
        "click .f2"         : "filterBy2",
        "mouseup .f4"       : "filterBy4",
        "mouseup .f5"       : "filterBy5",
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

    filterBy4: function(e){
        var rangoPrice = $("#priceChecker").val();
        rangoPrice = rangoPrice.split(" - ");
        var menorP = rangoPrice[0].split("$");
        var mayorP = rangoPrice[1].split("$");
        var menorPrice = parseFloat(menorP[1]); 
        var mayorPrice = parseFloat(mayorP[1]); 
        _.each(allPropertiesMarkers, function(marker){
            var precio = parseFloat(marker.precio);
            if((precio >= menorPrice) && (precio <= mayorPrice)){
                marker.setVisible(true);
            }else{
                marker.setVisible(false);
            }
        });
    
    },

    filterBy5: function(e){
        var rangoHab = $("#habChecker").val();
        rangoHab = rangoHab.split(" - ");
        rangoHab[0] = parseFloat(rangoHab[0]);
        rangoHab[1] = parseFloat(rangoHab[1]);
        _.each(allPropertiesMarkers, function(marker){
            var habitaciones = parseFloat(marker.habitaciones);
            if((habitaciones >= rangoHab[0]) && (habitaciones <= rangoHab[1])){
                marker.setVisible(true);
            }else{
                marker.setVisible(false);
            }
        });
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
