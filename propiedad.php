<?php
	include("api/seguridad.php");
	include ("api/consultas.php");
	$id_propiedad = $_GET["id"];
	$propiedad = consultar("SELECT * FROM propiedades WHERE IdPropiedad= $id_propiedad");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<h1>Detalles de la propiedad</h1>
<div>
<ul>
	<li><a href="lista_propiedades.php">Inmuebles</a></li>
	<li><a href="mis_movimientos.php">Mis movimientos</a></li>
	<li><a href="salir.php">Salir</a></li>
</ul>
</div>
<div>
<?php
	echo "<input type= 'text' hidden='true' name='id_propiedad' value='".$propiedad['0']['IdPropiedad']."'>";
	echo "<p>Dirección: ".$propiedad['0']['Direccion']."</p>";
	echo "<p>Colonia: ".$propiedad['0']['Colonia']."</p>";
	echo "<p>Estado: ".$propiedad['0']['Estado']."</p>";
	echo "<p>Municipio: ".$propiedad['0']['Municipio']."</p>";
	echo "<p>Tamaño de la construcción: ".$propiedad['0']['Construccion']." ".$propiedad['0']['Unidad1']."</p>";
	echo "<p>Tamaño del terreno: ".$propiedad['0']['Terreno']." ".$propiedad['0']['Unidad2']."</p>";
	echo "<p>Fecha de inicio: ".$propiedad['0']['FInicio']."</p>";
	echo "<p>Fecha del cierre: ".$propiedad['0']['FFin']."</p>";
	echo "<p>Motivo del cierre: ".$propiedad['0']['Disponible']."</p>";
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
</body>
</html>