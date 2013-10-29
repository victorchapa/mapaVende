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
<?php include("seguridad.php"); 
include ("consultas.php");
$id_propiedad = $_GET["id"];
$propiedad = consultar("SELECT * FROM propiedades WHERE id_propiedad= $id_propiedad");
echo "<input type= 'text' hidden='true' name='id_propiedad' value='".$propiedad['0']['id_propiedad']."'></input>";
echo "<p>Dirección: <input type= 'text' disabled='true' name='direccion' value='".$propiedad['0']['Direccion']."'></input></p>";
echo "<p>Colonia: <input type= 'text' disabled='true' name='colonia' value='".$propiedad['0']['Colonia']."'></input></p>";
echo "<p>Estado: <input type= 'text' disabled='true' name='estado' value='".$propiedad['0']['Estado']."'></input></p>";
echo "<p>Municipio: <input type= 'text' disabled='true' name='municipio' value='".$propiedad['0']['Municipio']."'></input></p>";
echo "<p>Fecha de inicio: <input type= 'text' disabled='true' name='fecha_inicio' value='".$propiedad['0']['Fecha_inicio']."'></input></p>";
?>
</div>
</body>
</html>