<?php include("api/security.php");
	include("api/consultas.php");
	$propiedades= consultar("SELECT * FROM propiedades WHERE Disponible !='Si'"); 
?>
<!DOCTYPE html>
<html>
	<head>
    	<meta charset="utf-8">
		<title>Bienvenido al sistema</title>
		<link rel="stylesheet" href="assets/css/mainAdmin.css">
    	<link rel="stylesheet" href="assets/css/normalize.css">
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
		echo "<td><a href=". ("propiedad.php?id=". $propiedad["IdPropiedad"]) .">Ver</a></td></tr>";
		}
		echo "</tbody></table>";
	} else {
	echo "<p>No haz hecho ningún movimiento</p>";}
	?>
	</div>
	</body>
</html>