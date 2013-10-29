<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<?php include("seguridad.php");
	include("consultas.php");
	$propiedades= consultar("SELECT * FROM propiedades WHERE Disponibilidad!='Disponible'"); 
?>
<head>
<title>
Bienvenido al sistema
</title>
<head>
<body>
<h1>Mis movimientos</h1>
<div>
<ul>
	<li><a href="lista_propiedades.php">Inmuebles</a></li>
	<li><a href="mis_movimientos.php">Mis movimientos</a></li>
	<li><a href="salir.php">Salir</a></li>
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
	echo "<td>".$propiedad['Tpropiedad']."</td>";
	echo "<td>".$propiedad['Toperacion']."</td>";
	echo "<td>".$propiedad['Fecha_fin']."</td>";
	echo "<td><a href=". ("propiedad.php?id=". $propiedad["id_propiedad"]) .">Ver detalles</a></td></tr>";
	}
} else {
echo "<p>No haz hecho ningún movimiento</p>";}
?>
	<tbody>
</table>
</body>
</html>