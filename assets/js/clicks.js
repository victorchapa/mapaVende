$(document).ready(function(){
	$('.cambiar').on('change', function(el){
        var id= $(el.target).val();
        if(id == 0){
            $(".municipio .muni").remove();
        }else{
            $.ajax({
                type: 'POST',
                url: 'api/municipio.php',
                data:{
                    id_estado:id
                },
                success: function(obj){
                    $(".municipio .muni").remove();
                    _.each(obj, function(data){
                        $(".municipio").append("<option class='muni' value='"+data.id_municipio+"'>"+data.municipio+"</option>")

                    })
                }
            });
        }
	});
});