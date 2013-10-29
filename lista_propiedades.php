<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<?php include("api/seguridad.php");
	include("api/consultas.php");
	$propiedades= consultar("SELECT * FROM propiedades WHERE Disponible='Si'"); ?>
<head>
<title>
Bienvenido al sistema
</title>
<head>
<body>
<h1>Lista de inmuebles</h1>
<div>
<ul>
	<li><a href="lista_propiedades.php">Inmuebles</a></li>
	<li><a href="mis_movimientos.php">Mis movimientos</a></li>
	<li><a href="api/salir.php">Salir</a></li>
</ul>
</div>
<div>
<a href="agregar.php">Agregar Inmueble</a>
<?php if($propiedades) { ?>
<table>
	<thead>
		<th>Dirección</th>
		<th>Inmobiliaria</th>
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
	echo "<td><a href=". ("editar.php?id=". $propiedad["id_propiedad"]) .">Modificar</a>";
	echo "<a href=". ("baja.php?id=". $propiedad["id_propiedad"]) .">Cerrar</a></td></tr>";
	}
} else {
echo "<p>No tienes ninguna propiedad</p>";
}
?>
	<tbody>
</table>
</body>
</html>