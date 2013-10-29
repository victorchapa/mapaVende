function validarFormMarcas(formulario) {
  if(formulario.marca.value.length==0) {
    formulario.marca.focus();
	$(".noMarca").show();
	setTimeout(function(){
		$(".noMarca").hide();
	}, 3000);

    return false;
  }
  return true;
}

function validarFormModelos(formulario) {
  if(formulario.marca.selectedIndex==0) {
    formulario.marca.focus();
	$(".noMarca").show();
	setTimeout(function(){
		$(".noMarca").hide();
	}, 3000);
	return false;
	}
	
	if(formulario.modelo.value.length==0) {
    formulario.modelo.focus();
	$(".noModelo").show();
	setTimeout(function(){
		$(".noModelo").hide();
	}, 3000);
    return false;
	}
  return true;
}