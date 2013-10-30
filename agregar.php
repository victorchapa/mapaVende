<?php
  include("api/security.php");
  include("api/consultas.php");
  $today = date("d/m/Y"); ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mapavende</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <script src="assets/js/libs/jquery.js"></script>
    <script src="assets/js/libs/underscore.js"></script>
    <script src="assets/js/libs/backbone.js"></script>
    <script src="assets/js/libs/IEChecker.js"></script>
    <script src="assets/js/libs/jquery-uiDatePicker.js"></script>
    <script src="assets/js/libs/jQueryDataPickerEs.js"></script>
    <script src="assets/js/libs/bootstrapModal.js"></script>
    <script src="assets/js/libs/jQueryDnDAlerts.js"></script>
    <script src="assets/js/libs/jQueryAlerts.js"></script>
    <script type="text/javascript" src="assets/js/clicks.js"></script>
    <script src="http://maps.google.com/maps?file=api&;v=2&;key=AIzaSyAHIev-SgOWp6Fa9I7kaHePTUcP5AKQqfk&;sensor=false" type="text/javascript"></script>
    <script type="text/javascript">
    var map      = null;
    var geocoder = null;
    function load() {
      map = new GMap2(document.getElementById("map"));
      map.setCenter(new GLatLng(19.23944127048188,-103.723670410115625), 15);
      map.addControl(new GSmallMapControl());
	   	map.addControl(new GMapTypeControl());
      geocoder = new GClientGeocoder();
		  GEvent.addListener(map, "click",
			function(marker, point) {
 		 		if (marker) {
          null;
        } else {
          	map.clearOverlays();
					 var marcador = new GMarker(point);
					 map.addOverlay(marcador);
					 var puntos = point.y.toFixed(4)+","+point.x.toFixed(4);
					 document.form.coordenadas.value = String(puntos);
					}
  			}
			 );
      }
	   </script>
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
<body onload="load();" onunload="GUnload();">
<h1>Agregar propiedad</h1>
<ul>
	<li><a href="lista_propiedades.php">Inmuebles</a></li>
	<li><a href="mis_movimientos.php">Mis movimientos</a></li>
	<li><a href="api/exit.php">Salir</a></li>
</ul>
<ul>
	<li><a href="http://vimeo.com/15888243">Video tutorial agregar propiedad</a></li>
	<li><a href="http://vimeo.com/17195272">Video tutorial redimencionar imagen</a></li>
	<li><a href="http://www.ampicolima.com.mx/admin/archivos/vso_redimensionar.exe">Baja aqui software redimenicionar</a></li>
</ul>
</div>
<form name ="form" method="post" action="api/addProperty.php" enctype="multipart/form-data">
<p>Dirección: <input type= 'text' name='direccion'/></p>
<p>Colonia: <input type= 'text' name='colonia'/></p>
<?php
$estados= consultar("SELECT * FROM estados");
echo "<p>Estado: <select name='estado' class='cambiar'> <option value='0'>Seleccione un estado</option>";
foreach ($estados as $estado){
  echo "<option value='".$estado['id_estado']."'>".$estado['estado']."</option>";
}
echo "</select></p>";
?>
<p>Municipio: <select name='municipio' class="municipio">
  <option>Seleccione un municipio</option>
</select></p>
<p>Superficie de construcción: <input type="text" name="construccion" onkeypress="return validar(event)"></input>
<select name="unidad1">
<option value="M2">M2</option>
<option value="Hectarea">Hectarea</option>
<option value="Acre">Acre</option>
</select></p>
<p>Superficie del terreno: <input type="text" name="terreno" onkeypress="return validar(event)"></input>
<select name="unidad2">
<option value="M2">M2</option>
<option value="Hectarea">Hectarea</option>
<option value="Acre">Acre</option>
</select></p>
<p>Precio: <input type="text" name="precio" onkeypress="return validar(event)"></input>
<select name="moneda">
<option value="Pesos">Pesos</option>
<option value="Dolares">Dolares</option>
<option value="por M2">por M2</option>
<option value="por Hectarea">por M2</option>
</select></p>
<p>Piso(s): <select name="piso">
<option value ="1">1</option>
<option value ="2">2</option>
<option value ="3">3</option>
<option value ="4">4</option>
</select></p>
<?php
echo "<p>Cochera(s): <select name='cochera'>";
for ($i=0; $i<10; $i++){
  echo "<option value='".$i."'>".$i."</option>";
}
echo "<option value='mas de 9'>mas de 9</option>";
echo "</select></p>";
?>
<?php
echo "<p>Cuarto(s): <select name='cuarto'>";
for ($i=0; $i<7; $i++){
  echo "<option value='".$i."'>".$i."</option>";
}
echo "<option value='varios'>varios</option>";
echo "</select></p>";
?>
<?php
echo "<p>Baño(s): <select name='bath'>";
for ($i=0; $i<7; $i++){
  echo "<option value='".$i."'>".$i."</option>";
}
for ($i=1.5; $i<7.5; $i++){
  echo "<option value='".$i."'>".$i."</option>";
}
echo "<option value='mas de 8'>mas de 8</option>";
echo "</select></p>";
?>
<p>Tipo de operacion: <select name="toperacion">
<option value ="seleccionar">Seleccione una unidad</option>
<option value ="Venta">Venta</option>
<option value ="Renta">Renta</option>
<option value ="Traspaso">Traspaso</option>
</select></p>
<p>Tipo de propiedad: <select name="tpropiedad">
<option value ="seleccionar">Seleccione una unidad</option>
<option value ="Casa">Casa</option>
<option value ="Terreno">Terreno</option>
<option value ="Edificio">Edificio</option>
<option value ="Local">Local</option>
<option value ="Oficina">Oficina</option>
<option value ="Terreno urbano">Terreno urbano</option>
<option value ="Terreno comercial">Terreno comercial</option>
<option value ="Terreno campestre">Terreno campestre</option>
<option value ="Bodega">Bodega</option>
<option value ="Rancho">Rancho</option>
<option value ="Departamento">Departamento</option>
<option value ="Hotel">Hotel</option>
</select></p>
<p>Fecha inicio de disponibilidad<input type="text" name="finicio" value="<?php echo $today;?>"><p>
<p>Fecha final de disponibilidad<input type="text" name="ffin" value="<?php echo $today;?>"><p>
<p>Imagen 1: <input type="file" name="foto1" accept='image/jpeg, image/bmp'>
<p>Imagen 2: <input type="file" name="foto2" accept='image/jpeg, image/bmp'>
<p>Imagen 3: <input type="file" name="foto3" accept='image/jpeg, image/bmp'>
<p>Imagen 4: <input type="file" name="foto4" accept='image/jpeg, image/bmp'>
<p>Imagen 5: <input type="file" name="foto5" accept='image/jpeg, image/bmp'>
<p>Imagen 6: <input type="file" name="foto6" accept='image/jpeg, image/bmp'>
<p>Descripción: <textarea name="descripcion" rows="10" maxlength="500"></textarea>
<p>Coordenadas: <input type="text" name="coordenadas" readonly="readonly" style="width: 150px;"/></p>
<div id="map" style="width: 600px; height: 400px; position: relative; background-color: rgb(229, 227, 223);">
</div>
<input type="submit" name="agregar" value="Enviar">
</form>
</div>
</body>
</html>