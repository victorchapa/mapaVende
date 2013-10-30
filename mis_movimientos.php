<?php include("api/security.php");
	include("api/consultas.php");
	$propiedades= consultar("SELECT * FROM propiedades WHERE Disponible !='Si'"); 
?>
<!DOCTYPE html>
<html>
	<head>
    	<meta charset="utf-8">
		<title>Bienvenido al sistema</title>
	</head>
<body>
	<h1>Mis movimientos</h1>
	<div>
	<ul>
		<li><a href="lista_propiedades.php">Inmuebles</a></li>
		<li><a href="mis_movimientos.php">Mis movimientos</a></li>
		<li><a href="api/exit.php">Salir</a></li>
	</ul>
	</div>
	<?php if($propiedades) { ?>
	<div>
	<table>
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
	} else {
	echo "<p>No haz hecho ningún movimiento</p>";}
	?>
		<tbody>
	</table>
	</body>
</html>