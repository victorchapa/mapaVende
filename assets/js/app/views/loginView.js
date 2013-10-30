var LoginView = Backbone.View.extend({

    el: "#mainHeader",

    events: {
        "mouseover .brandLogin"     : "showLogin",
        "mouseleave .loginField"    : "hideLogin",
    },

    initialize: function(){
        var logeado = $("#logeado").val(); 
        if(logeado == "SI"){
            $("p", ".brandLogin").text("Sesión Iniciada");
            $(".brandLogin").css({width: "110px"});
        }
        var template = TEMPLATES.loginAs;
        var compiledTemplate = _.template($(template).html());
        var data = logeado;
        var logeado = {logeado: data}
        $(".loginAs").html(compiledTemplate(logeado));
    },

    showLogin: function(){
        var logeado = $("#logeado").val(); 
        if(logeado == "NO"){
            $("#loginForm").show("slow");
        }
    },

    hideLogin: function(){
        $("#loginForm").hide(1000);
    }
    
});
