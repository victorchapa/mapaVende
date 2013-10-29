<?php
	include("api/seguridad.php");
	$today = date("d/m/y");
	include ("api/consultas.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="js/jquery.js"></script>
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
  <script>
function validar(e){
tecla_codigo = (document.all) ? e.keyCode : e.which;
if(tecla_codigo==8)return true;
patron =/[0-9.]/;
tecla_valor = String.fromCharCode(tecla_codigo);
return patron.test(tecla_valor);
}
</script>
</head>
<body>
<h1>Cerrar propiedad</h1>
<div>
<ul>
	<li><a href="lista_propiedades.php">Inmuebles</a></li>
	<li><a href="mis_movimientos.php">Mis movimientos</a></li>
	<li><a href="salir.php">Salir</a></li>
</ul>
</div>
<div>
<form method="post" action="api/cerrar.php" onsubmit="return validarForm(this)";>
<?php
$id_propiedad = $_GET["id"];
$propiedad = consultar("SELECT * FROM propiedades WHERE IdPropiedad= $id_propiedad");
echo "<input type= 'text' hidden='true' name='id_propiedad' value='".$propiedad['0']['IdPropiedad']."'></input>";
echo "<p>Dirección: <input type= 'text' disabled='true' name='direccion' value='".$propiedad['0']['Direccion']."'></input></p>";
echo "<p>Colonia: <input type= 'text' disabled='true' name='colonia' value='".$propiedad['0']['Colonia']."'></input></p>";
echo "<p>Estado: <input type= 'text' disabled='true' name='estado' value='".$propiedad['0']['Estado']."'></input></p>";
echo "<p>Municipio: <input type= 'text' disabled='true' name='municipio' value='".$propiedad['0']['Municipio']."'></input></p>";
echo "<p>Fecha de inicio: <input type= 'text' disabled='true' name='fecha_inicio' value='".$propiedad['0']['FInicio']."'></input></p>";
echo "<input type='text' hidden='true' name='fecha_fin' value='".$today."'></input>";
?>
<p>Tipo de cierre: <select name="cierre">
<option value="0">Seleccione una opción</option>
<option value="Crédito">Crédito</option>
<option value="Contado">Contado</option>
<option value="Fovisste">Fovisste</option>
<option value="Infonavit">Infonavit</option>
<option value="Crédito Bancario">Crédito Bancario</option>
<option value="Subsidio">Subsidio</option>
<option value="Baja">Baja</option>
<option value="Renta">Renta</option>
</select>
<p>Precio final: <input type="text" name="precio" onkeypress="return validar(event)"/>
<select name="moneda">
<option value="0">Seleccione una opción</option>
<option value="Pesos">Pesos</option>
<option value="Dolares">Dolares</option>
<option value="por metro cuadrado">por metro cuadrado</option>
<option value="por hectarea">por hectarea</option>
</select></p>
<input type="submit" name="guardar" value="Guardar">
</form>
</div>
</body>
</html>