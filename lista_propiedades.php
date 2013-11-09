<?php include("api/security.php");
	include("api/consultas.php");
	$propiedades= consultar("SELECT * FROM propiedades WHERE Disponible='Si'"); ?>
<!DOCTYPE html>
<html>
	<head>
    <meta charset="utf-8">
		<title>Bienvenido al sistema</title>
    <link rel="stylesheet" href="assets/css/bootstrapModal.css">
    <link rel="stylesheet" href="assets/css/mainAdmin.css">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <script src="assets/js/libs/jquery.js"></script>
    <script src="assets/js/libs/underscore.js"></script>
    <script src="assets/js/libs/backbone.js"></script>
    <script src="assets/js/libs/bootstrapModal.js"></script>
    <script src="assets/js/libs/jquery-uiDatePicker.js"></script>
    <script src="assets/js/libs/jQueryDataPickerEs.js"></script>
    <script src="http://maps.google.com/maps?file=api&v=2&key=AIzaSyAHIev-SgOWp6Fa9I7kaHePTUcP5AKQqfk&sensor=false" type="text/javascript"></script>
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
					 var puntos = point.y.toFixed(6)+","+point.x.toFixed(6);
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
	<body>
		<h1>Lista de inmuebles</h1>
		<div>
			<ul>
				<li><a href="lista_propiedades.php">Inmuebles</a></li>
				<li><a href="mis_movimientos.php">Mis movimientos</a></li>
				<li><a href="api/exit.php">Salir</a></li>
			</ul>
		</div>
		<div>
			<a href="#" class="addProperty" >Agregar Inmueble</a>
		<?php if($propiedades) { ?>
		<table>
			<thead>
				<th>Dirección</th>
				<th>Estado</th>
				<th>Municipio</th>
				<th>Operaciones</th>
			</thead>
			<tbody>
			<?php
				foreach ($propiedades as $propiedad){
				echo "<tr><td>".$propiedad["Direccion"]."</br>".$propiedad["Colonia"]."</td>";
				echo "<td>".$propiedad["Estado"]."</td>";
				echo "<td>".$propiedad["Municipio"]."</td>";
				echo "<td><a href=". ("editar.php?id=". $propiedad["IdPropiedad"]) .">Modificar</a>";
				echo "<a href=". ("baja.php?id=". $propiedad["IdPropiedad"]) .">Cerrar</a></td></tr>";
				}
			} else {
			echo "<p>No tienes ninguna propiedad</p>";
			}
			?>
			<tbody>
		</table>
    </div>
    <div class="modal" id="modalInmuebles" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h2 class="modal-title"></h2>
          </div>
          <div id="modalInmueblesDisplayer" class="modal-body wrapper">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-details" data-dismiss="modal">Cerrar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!-- Scripting -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/routerAdmin.js"></script>
    <script src="assets/js/templates.js"></script>
    <!-- Templates -->
    <script src="templates/addProperty.js"></script>
    <!-- Collections -->
    <script src="assets/js/app/collections/estados.js"></script>
    <!-- Models -->
    <!-- Views -->
    <script src="assets/js/app/views/propertiesListView.js"></script>
	</body>
</html>
