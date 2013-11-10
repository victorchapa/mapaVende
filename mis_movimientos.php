<?php include("api/security.php");
	include("api/consultas.php");
	$propiedades= consultar("SELECT * FROM propiedades WHERE Disponible !='Si'"); 
?>
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
	</head>
<body>
	<div class='logoContainer'>
      <img src='assets/img/mapaLogo.png'>
    </div>
	<div class="menu">
	<ul>
		<li><a href="lista_propiedades.php">Inmuebles</a></li>
		<li><a href="mis_movimientos.php">Mis movimientos</a></li>
		<li><a href="api/exit.php">Salir</a></li>
	</ul>
	</div>
	<div class="tableProperties">
	<h1>Lista de movimientos</h1>
	<?php if($propiedades) { ?>
	<table border="1">
		<thead>
			<th>Dirección</th>
			<th>Tipo propiedad</th>
			<th>Tipo operacion</th>
			<th>Fecha</th>
			<th>Ver detalle</th>
		</thead>
		<tbody>
	<?php
		foreach ($propiedades as $propiedad){
		echo "<tr><td>".$propiedad['Direccion']."</br>".$propiedad['Colonia']."</td>";
		echo "<td>".$propiedad['TPropiedad']."</td>";
		echo "<td>".$propiedad['TOperacion']."</td>";
		echo "<td>".$propiedad['FFin']."</td>";
		echo "<td><a class='showProperty' idproperty=".$propiedad["IdPropiedad"]." href='#'>Ver</a></td></tr>";
		}
		echo "</tbody></table>";
	} else {
	echo "<p>No haz hecho ningún movimiento</p>";}
	?>
		<tbody>
	</table>
	</div>
    <div class="modal" id="modalMovimientos" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h2 class="modal-title">Datos de la Propiedad</h2>
          </div>
          <div id="modalMovimientosDisplayer" class="modal-body wrapper">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-details" data-dismiss="modal">Cerrar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!-- Scripting -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/routerMovimientos.js"></script>
    <script src="assets/js/templates.js"></script>
    <!-- Templates -->
    <script src="templates/propertyMovimientos.js"></script>
    <!-- Collections -->
    <!-- Models -->
    <script src="assets/js/app/models/property.js"></script>
    <!-- Views -->
    <script src="assets/js/app/views/myMovesView.js"></script>
	</body>
</html>
