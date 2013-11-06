var FiltersView = Backbone.View.extend({

    el: "#filters",

    events:{
        "click .f1"                     : "getValues",
        "click .f2"                     : "getValues",
        "click .f3"                     : "getValues",
        "mouseup .precio"               : "filterByP",
        "mouseup .habitaciones"         : "filterByH",
    },
    
    getValues: function(e){
        var target = $(e.target).attr("class");
        var valueF1 = $(".f1 option:selected").val();
        var valueF2 = $(".f2 option:selected").val();
        var valueF3 = $(".f3 input[type='radio']:checked").val();

        var rangoPrice = $("#priceChecker").val();
        rangoPrice = rangoPrice.split(" - ");
        var menorP = rangoPrice[0].split("$");
        var mayorP = rangoPrice[1].split("$");
        var valueF4 = [parseFloat(menorP[1]), parseFloat(mayorP[1])];

        var rangoHab = $("#habChecker").val();
        rangoHab = rangoHab.split(" - ");
        var valueF5 = [parseFloat(rangoHab[0]), parseFloat(rangoHab[1])];

        this.validation(valueF1, valueF2, valueF3, valueF4, valueF5, target);
    },

    validation: function(valueF1, valueF2, valueF3, valueF4, valueF5, target){
        var self = this;
        newRankP = [];
        newRankH = [];
        

        if(target == "f1"){
            console.log("Es el F1");
            var firstSelectTag = valueF1;
            var secondSelectTag = valueF2;
        }else if(target == "f2"){
            console.log("Es el F2");
            var firstSelectTag = valueF2;
            var secondSelectTag = valueF1;
        } 
        switch(firstSelectTag){
            case "Todos" : 
                if((secondSelectTag == "seleccionar") && (valueF3 == undefined)){
                    console.log("Ninguno extra");
                    _.each(allPropertiesMarkers, function(marker){
                        if(marker.tOperacion != undefined){
                            marker.setVisible(true);
                            self.setNewRankP(marker.precio, false);
                            self.setNewRankH(marker.habitaciones, false);
                        }else{
                            marker.setVisible(false);
                        }
                    });
                    self.setNewRankP("", true);
                    self.setNewRankH("", true);
                }else if((secondSelectTag != "seleccionar") && (valueF3 == undefined)){
                    console.log("Seleccionar tbn F2");
                    _.each(allPropertiesMarkers, function(marker){
                        if(((marker.tOperacion != undefined) || (marker.tOperacion != undefined)) && ((marker.tPropiedad != undefined)|| (marker.tPropiedad != undefined))){
                            marker.setVisible(true);
                            self.setNewRankP(marker.precio, false);
                            self.setNewRankH(marker.habitaciones, false);
                        }else{
                            marker.setVisible(false);
                        }
                    });
                    self.setNewRankP("", true);
                    self.setNewRankH("", true);
                }else if((secondSelectTag == "seleccionar") && (valueF3 != undefined)){
                    console.log("Seleccionado tbn F3");
                    _.each(allPropertiesMarkers, function(marker){
                        if(valueF3 == "Cualquiera"){
                            if(((marker.tOperacion != undefined) || (marker.tPropiedad != undefined)) && (marker.antiguedad != undefined)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        }else{
                            if(((marker.tOperacion != undefined) || (marker.tPropiedad != undefined)) && (marker.antiguedad == valueF3)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        }
                    });
                    self.setNewRankP("", true);
                    self.setNewRankH("", true);
                }else if((secondSelectTag != "seleccionar") && (valueF3 != undefined)){
                    console.log("Seleccionado F2 y F3");
                    _.each(allPropertiesMarkers, function(marker){
                        if(valueF3 == "Cualquiera"){
                            if((marker.tOperacion != undefined) && (marker.tPropiedad != undefined) && (marker.antiguedad != undefined)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        }else{
                            if(((marker.tOperacion != undefined) || (marker.tOperacion != undefined)) && ((marker.tPropiedad != undefined)|| (marker.tPropiedad != undefined)) && (marker.antiguedad == valueF3)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        }
                    });
                    self.setNewRankP("", true);
                    self.setNewRankH("", true);
                }
                break;
        }if((firstSelectTag != "Todos") && (firstSelectTag != "seleccionar") && (firstSelectTag != undefined)){
            console.log("No es todos");
            if((secondSelectTag != "seleccionar") && (valueF3 != undefined)){
                console.log("No es todos y con F2 y F3");
                _.each(allPropertiesMarkers, function(marker){
                    if(secondSelectTag == "Todos"){
                        if(valueF3 == "Cualquiera"){
                            if((marker.tOperacion == firstSelectTag) || (marker.tPropiedad == firstSelectTag) && (marker.antiguedad != undefined)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }

                        }else{
                            if((marker.tOperacion == firstSelectTag) || (marker.tPropiedad == firstSelectTag) && (marker.antiguedad == valueF3)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        }
                    }else{
                        if(valueF3 != "Cualquiera"){
                            if(((marker.tOperacion == firstSelectTag) || (marker.tOperacion == secondSelectTag)) && ((marker.tPropiedad == firstSelectTag) || (marker.tPropiedad == secondSelectTag)) && (marker.antiguedad == valueF3)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        }else{
                            if(((marker.tOperacion == firstSelectTag) || (marker.tOperacion == secondSelectTag)) && ((marker.tPropiedad == firstSelectTag) || (marker.tPropiedad == secondSelectTag)) && (marker.antiguedad != undefined)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        }
                    }
                });
                self.setNewRankP("", true);
                self.setNewRankH("", true);
            }else if((secondSelectTag != "seleccionar") && (valueF3 == undefined)){
                console.log("No es todos y con F2");
                _.each(allPropertiesMarkers, function(marker){
                    if(secondSelectTag == "Todos"){
                        if((marker.tOperacion == firstSelectTag) || (marker.tPropiedad == firstSelectTag)){
                            marker.setVisible(true);
                            self.setNewRankP(marker.precio, false);
                            self.setNewRankH(marker.habitaciones, false);
                        }else{
                            marker.setVisible(false);
                        }
                    }else{
                        if(((marker.tOperacion == firstSelectTag) || (marker.tOperacion == secondSelectTag)) && ((marker.tPropiedad == firstSelectTag) || (marker.tPropiedad == secondSelectTag))){
                            marker.setVisible(true);
                            self.setNewRankP(marker.precio, false);
                            self.setNewRankH(marker.habitaciones, false);
                        }else{
                            marker.setVisible(false);
                        }
                    }
                });
                self.setNewRankP("", true);
                self.setNewRankH("", true);
            }else if((secondSelectTag == "seleccionar") && (valueF3 != undefined)){
                console.log("No es todos y con F3");
                _.each(allPropertiesMarkers, function(marker){
                    if(valueF3 == "Cualquiera"){
                        if(((marker.tOperacion == firstSelectTag) || (marker.tPropiedad == firstSelectTag)) && (valueF3 != undefined)){
                            marker.setVisible(true);
                            self.setNewRankP(marker.precio, false);
                            self.setNewRankH(marker.habitaciones, false);
                        }else{
                            marker.setVisible(false);
                        }
                    }else{
                        if(((marker.tOperacion == firstSelectTag) || (marker.tPropiedad == firstSelectTag)) && (marker.antiguedad == valueF3)){
                            marker.setVisible(true);
                            self.setNewRankP(marker.precio, false);
                            self.setNewRankH(marker.habitaciones, false);
                        }else{
                            marker.setVisible(false);
                        }
                    }
                });
            }else{
                console.log("Solo el.");
                _.each(allPropertiesMarkers, function(marker){
                    if((marker.tOperacion == firstSelectTag) || (marker.tPropiedad == firstSelectTag)){
                        marker.setVisible(true);
                        self.setNewRankP(marker.precio, false);
                        self.setNewRankH(marker.habitaciones, false);
                    }else{
                        marker.setVisible(false);
                    }
                });
                self.setNewRankP("", true);
                self.setNewRankH("", true);
            }
        }
        if(firstSelectTag == undefined){
            console.log("Selecciono solo el Radio");
            if((valueF1 != "seleccionar") && (valueF2 != "seleccionar")){
                console.log("Selecciono Radio y con F1 y F2"); 
                if(valueF3 != "Cualquiera"){
                    if((valueF1 != "Todos") && (valueF2 != "Todos")){
                        _.each(allPropertiesMarkers, function(marker){
                            if((marker.tOperacion == valueF1) && (marker.tPropiedad == valueF2) && (marker.antiguedad == valueF3)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        });
                    }else if((valueF1 == "Todos") && (valueF2 != "Todos")){
                        _.each(allPropertiesMarkers, function(marker){
                            if((marker.tOperacion != undefined) && (marker.tPropiedad == valueF2) && (marker.antiguedad == valueF3)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        });
                    }else if((valueF1 != "Todos") && (valueF2 == "Todos")){
                        _.each(allPropertiesMarkers, function(marker){
                            if((marker.tOperacion == valueF1) && (marker.tPropiedad != undefined) && (marker.antiguedad == valueF3)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        });
                    }else if((valueF1 == "Todos") && (valueF2 == "Todos")){
                        _.each(allPropertiesMarkers, function(marker){
                            if((marker.tOperacion != undefined) && (marker.tPropiedad != undefined) && (marker.antiguedad == valueF3)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        });
                    }
                }else{
                    if((valueF1 != "Todos") && (valueF2 != "Todos")){
                        _.each(allPropertiesMarkers, function(marker){
                            if((marker.tOperacion == valueF1) && (marker.tPropiedad == valueF2) && (marker.antiguedad != undefined)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        });
                    }else if((valueF1 == "Todos") && (valueF2 != "Todos")){
                        _.each(allPropertiesMarkers, function(marker){
                            if((marker.tOperacion != undefined) && (marker.tPropiedad == valueF2) && (marker.antiguedad != undefined)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        });
                    }else if((valueF1 != "Todos") && (valueF2 == "Todos")){
                        _.each(allPropertiesMarkers, function(marker){
                            if((marker.tOperacion == valueF1) && (marker.tPropiedad != undefined) && (marker.antiguedad != undefined)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        });
                    }else if((valueF1 == "Todos") && (valueF2 == "Todos")){
                        _.each(allPropertiesMarkers, function(marker){
                            if((marker.tOperacion != undefined) && (marker.tPropiedad != undefined) && (marker.antiguedad != undefined)){
                                marker.setVisible(true);
                                self.setNewRankP(marker.precio, false);
                                self.setNewRankH(marker.habitaciones, false);
                            }else{
                                marker.setVisible(false);
                            }
                        });
                    }
                }
                self.setNewRankP("", true);
                self.setNewRankH("", true);
            }else{
                console.log("Solo el.");
                if(valueF3 != "Cualquiera"){
                    _.each(allPropertiesMarkers, function(marker){
                        if(marker.antiguedad == valueF3){
                            marker.setVisible(true); 
                            self.setNewRankP(marker.precio, false);
                            self.setNewRankH(marker.habitaciones, false);
                        }else{
                            marker.setVisible(false);
                        }
                    });
                }else{
                    _.each(allPropertiesMarkers, function(marker){
                        if(marker.antiguedad != undefined){
                            marker.setVisible(true); 
                            self.setNewRankP(marker.precio, false);
                            self.setNewRankH(marker.habitaciones, false);
                        }else{
                            marker.setVisible(false);
                        }
                    });
                }
                self.setNewRankP("", true);
                self.setNewRankH("", true);
            }
        }
     
        visibleMarkers = this.getVisibleMarkers();
    },
    
    setNewRankP: function(price, completed){
        if(completed != true){
            newRankP.push(price); 
        }else{
            if(newRankP.length == 1){
                this.renderSliderPrices(parseFloat(newRankP[0]), 1);
            }else if(newRankP.length >= 2){
                var menor = 1;
                var mayor = 1;
                _.each(newRankP, function(price, index){
                    if(index == 0){
                        if(parseFloat(price) >= mayor){
                            mayor = parseFloat(price);
                            menor = parseFloat(price);
                        }
                    }else{
                        if(parseFloat(price) >= mayor){
                            mayor = parseFloat(price);
                        }else if(parseFloat(price) <= menor){
                            menor = parseFloat(price);
                        }
                    }
                });
                this.renderSliderPrices(mayor, menor);
            }else{
                this.renderSliderPrices(0, 0);
            }
        }
    },

    setNewRankH: function(hab, completed){
        if(completed != true){
            newRankH.push(hab); 
        }else{
            if(newRankH.length == 1){
                this.renderSliderHabitaciones(parseFloat(newRankH[0]), 1);
            }else if(newRankH.length >= 2){
                var menor = 1;
                var mayor = 1;
                _.each(newRankH, function(habita, index){
                    if(index == 0){
                        if(parseFloat(habita) >= mayor){
                            mayor = parseFloat(habita);
                            menor = parseFloat(habita);
                        }
                    }else{
                        if(parseFloat(habita) >= mayor){
                            mayor = parseFloat(habita);
                        }else if(parseFloat(habita) <= menor){
                            menor = parseFloat(habita);
                        }
                    }
                });
                this.renderSliderHabitaciones(mayor, menor);
            }else{
                this.renderSliderHabitaciones(0, 0);
            }
        }
    },

    getVisibleMarkers: function(){
        var visibleMarkers = [];
        _.each(allPropertiesMarkers, function(marker){
            if(marker.visible == true){
                visibleMarkers.push(marker);
            }
        });
        return(visibleMarkers);
    },

    filterByP: function(){
        var self = this;
        newRankP = [];
        newRankH = [];

        var valueF1 = $(".f1 option:selected").val();
        var valueF2 = $(".f2 option:selected").val();
        var valueF3 = $(".f3 input[type='radio']:checked").val();

        var rangoPrice = $("#priceChecker").val();
        rangoPrice = rangoPrice.split(" - ");
        var menorP = rangoPrice[0].split("$");
        var mayorP = rangoPrice[1].split("$");
        var menorPrice = parseFloat(menorP[1]); 
        var mayorPrice = parseFloat(mayorP[1]); 

        if(((valueF1 == "seleccionar") || (valueF1 == "Todos")) && ((valueF2 == "seleccionar") || (valueF2 == "Todos")) && ((valueF3 == undefined) || (valueF3 == "Cualquiera"))){
            _.each(allPropertiesMarkers, function(marker){
                var precio = parseFloat(marker.precio);
                if((precio >= menorPrice) && (precio <= mayorPrice)){
                    marker.setVisible(true);
                    self.setNewRankH(marker.habitaciones, false);
                }else{
                    marker.setVisible(false);
                }
            });
            self.setNewRankH("", true);
        }else{
            _.each(visibleMarkers, function(marker){
                var precio = parseFloat(marker.precio);
                if((precio >= menorPrice) && (precio <= mayorPrice)){
                    marker.setVisible(true);
                    self.setNewRankH(marker.habitaciones, false);
                }else{
                    marker.setVisible(false);
                }
            });
            self.setNewRankH("", true);
        }
    
    },

    filterByH: function(){
        var self = this;
        newRankP = [];
        newRankH = [];

        var valueF1 = $(".f1 option:selected").val();
        var valueF2 = $(".f2 option:selected").val();
        var valueF3 = $(".f3 input[type='radio']:checked").val();

        var rangoHab = $("#habChecker").val();
        rangoHab = rangoHab.split(" - ");
        rangoHab[0] = parseFloat(rangoHab[0]);
        rangoHab[1] = parseFloat(rangoHab[1]);

        if(((valueF1 == "seleccionar") || (valueF1 == "Todos")) && ((valueF2 == "seleccionar") || (valueF2 == "Todos")) && ((valueF3 == undefined) || (valueF3 == "Cualquiera"))){
            _.each(allPropertiesMarkers, function(marker){
                var habitaciones = parseFloat(marker.habitaciones);
                if((habitaciones >= rangoHab[0]) && (habitaciones <= rangoHab[1])){
                    marker.setVisible(true);
                    self.setNewRankP(marker.precio, false);
                }else{
                    marker.setVisible(false);
                }
            });
            self.setNewRankP("", true); 
        }else{
            _.each(visibleMarkers, function(marker){
                var habitaciones = parseFloat(marker.habitaciones);
                if((habitaciones >= rangoHab[0]) && (habitaciones <= rangoHab[1])){
                    marker.setVisible(true);
                    self.setNewRankP(marker.precio, false);
                }else{
                    marker.setVisible(false);
                }
            });
            self.setNewRankP("", true);
        }
    },

    initialize: function(){
        var self = this;
        var pricesCollection = new PricesCollection();
        pricesCollection.fetch({
            success: function(data){
                var data = data.toJSON();
                var priceMayor = parseFloat(data[0].Precio); 
                var priceMenor = parseFloat(data[data.length - 1].Precio);
                self.renderSliderPrices(priceMayor, priceMenor);
            },
        });
        var habitacionesCollection = new HabitacionesCollection();
        habitacionesCollection.fetch({
            success: function(data){
                var data = data.toJSON();
                var mayorHabi = parseFloat(data[0].Cuarto); 
                var menorHabi = parseFloat(data[data.length - 1].Cuarto);
                self.renderSliderHabitaciones(mayorHabi, menorHabi);
            },
        });
        this.render();
    },

    renderSliderPrices: function(priceMayor, priceMenor){
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

    },

    renderSliderHabitaciones: function(mayorHabi, menorHabi){
        $(".sliderH").slider({
            range: true,
            min: menorHabi,
            max: mayorHabi,
            values: [menorHabi, mayorHabi],
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
