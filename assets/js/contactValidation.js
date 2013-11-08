var MyFunctions = {};    

function validation(){
    var fields = {nombre: false, telefono: false, correo: false, comentario: false};
    var inputs = $("input", ".contactForm");
    _.each(inputs, function(input, index){
        if((index == 1) || (index == 2) || (index == 3)){
            var value = $(input).val();
            if(value != ""){
                var name = $(input).attr("name");
                fields[name] = true;
            }
        } 
    }); 
    var valueTextArea = $("textarea", ".contactForm").val();
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
        $("input[type='submit']", ".contactForm").removeAttr("disabled");
        $("input[type='submit']", ".contactForm").removeClass("btn-disabled");
    }else{
        $("input[type='submit']", ".contactForm").attr("disabled", "disabled");
        $("input[type='submit']", ".contactForm").addClass("btn-disabled");
    }
}

MyFunctions.addEventsToValidation = function(){
    var inputs = $("input", ".contactForm");
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
