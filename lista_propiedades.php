<?php include("api/security.php");
	include("api/consultas.php");
	$propiedades= consultar("SELECT * FROM propiedades WHERE Disponible='Si'"); ?>
<!DOCTYPE html>
<html>
	<head>
    	<meta charset="utf-8">
		<title>Bienvenido al sistema</title>
	<head>
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
			<a href="agregar.php">Agregar Inmueble</a>
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
	</body>
</html>