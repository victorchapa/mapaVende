<?php
	include ("api/consultas.php");
	$id_propiedad = $_GET["id"];
	$propiedad = consultar("SELECT * FROM propiedades WHERE IdPropiedad= $id_propiedad");
?>
<!DOCTYPE html>
<html>
	<head>
    	<meta charset="utf-8">
    	<link rel="stylesheet" href="assets/css/main.css">
    	<link rel="stylesheet" href="assets/css/normalize.css">
	</head>
	<body>
	<div>
	<ul>
		<li><a href="lista_propiedades.php">Inmuebles</a></li>
		<li><a href="mis_movimientos.php">Mis movimientos</a></li>
		<li><a href="exit.php">Salir</a></li>
	</ul>
	</div>
	<div class="propertyContainer">
		<div class="property">
	<h1>Detalles de la propiedad</h1>
	<?php
		echo "<input type= 'text' hidden='true' name='id_propiedad' value='".$propiedad['0']['IdPropiedad']."'>";
		echo "<p>Dirección: ".$propiedad['0']['Direccion']."</p>";
		echo "<p>Colonia: ".$propiedad['0']['Colonia']."</p>";
		echo "<p>Estado: ".$propiedad['0']['Estado']."</p>";
		echo "<p>Municipio: ".$propiedad['0']['Municipio']."</p>";
		echo "<p>Tamaño de la construcción: ".$propiedad['0']['Construccion']." ".$propiedad['0']['Unidad1']."</p>";
		echo "<p>Tamaño del terreno: ".$propiedad['0']['Terreno']." ".$propiedad['0']['Unidad2']."</p>";
		echo "<p>Fecha de inicio: ".$propiedad['0']['FInicio']."</p>";
		echo "<p>Fecha de cierre: ".$propiedad['0']['FFin']."</p>";
		echo "<p>Descripción: ".$propiedad['0']['Descripcion']."</p>";
		echo "<a href='api/".$propiedad['0']['Foto1']."'><img src='api/".$propiedad['0']['Foto1']."'width='150' height='150'></a>";
		if ($propiedad['0']['Foto2'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto2']."'><img src='api/".$propiedad['0']['Foto2']."'width='150' height='150'></a>";
		}
		if ($propiedad['0']['Foto3'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto3']."'><img src='api/".$propiedad['0']['Foto3']."'width='150' height='150'></a>";
		}
		if ($propiedad['0']['Foto4'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto4']."'><img src='api/".$propiedad['0']['Foto4']."'width='150' height='150'></a>";
		}
		if ($propiedad['0']['Foto5'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto5']."'><img src='api/".$propiedad['0']['Foto5']."'width='150' height='150'></a>";
		}
		if ($propiedad['0']['Foto6'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto6']."'><img src='api/".$propiedad['0']['Foto6']."'width='150' height='150'></a>";
		}
	?>
		</div>
	</div>
	</body>
</html>