$(function(){

    function validation(){
        var fields = {nombre: false, telefono: false, correo: false, comentario: false};
        var inputs = $("input");
        _.each(inputs, function(input, index){
           if((index == 1) || (index == 2) || (index == 3)){
                var value = $(input).val();
                if(value != ""){
                    var name = $(input).attr("name");
                    fields[name] = true;
                }
           } 
        }); 
        var valueTextArea = $("textarea").val();
        if(valueTextArea != ""){
            fields["comentario"] = true;
        }
        var counter = 0
        _.each(fields, function(field){
            if(field == true){
                counter++;
            }
        });
        if(counter == 4){
            $("input[type='submit']").removeAttr("disabled");
            $("input[type='submit']").removeClass("btn-disabled");
        }else{
            $("input[type='submit']").attr("disabled", "disabled");
            $("input[type='submit']").addClass("btn-disabled");
        }
    }

    function addEvents(){
        var inputs = $("input");
        _.each(inputs, function(input, index){
            if((index == 1) || (index == 2) || (index == 3)){
                $(input).on("change keypress", function(){
                    validation();
                });
            }
        });
        $("textarea").on("change keypress", function(){
            validation();
        });
        $("input[type='submit']").on("mouseover", function(){
            validation();
        });
    }

    addEvents();
});
