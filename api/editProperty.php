<?php
	include("security.php");
	include("consultas.php");
	require("dbConfig.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
<?php
	$id = $_POST['id'];
	$direccion = $_POST['direccion'];
	$colonia = $_POST['colonia'];
	$id_estado = (string)$_POST['estado'];
	$id_municipio = $_POST['municipio'];
	$construccion = $_POST['construccion'];
	$unidad1 = $_POST['unidad1'];
	$terreno = $_POST['terreno'];
	$unidad2 = $_POST['unidad2'];
	$precio = $_POST['precio'];
	$moneda = $_POST['moneda'];
	$piso = $_POST['piso'];
	$cochera = $_POST['cochera'];
	$cuarto = $_POST['cuarto'];
	$bath = $_POST['bath'];
	$toperacion = $_POST['toperacion'];
	$antiguedad = $_POST['antiguedad'];
	$tpropiedad = $_POST['tpropiedad'];
	$finicio = $_POST['finicio'];
	$ffin = $_POST['ffin'];
	$descripcion = $_POST['descripcion'];
	$coordenadas = $_POST['coordenadas'];

$estado = consultar("SELECT estado FROM estados WHERE id_estado= '$id_estado'");
$municipio = consultar("SELECT municipio FROM municipios WHERE id_municipio = $id_municipio");
$estado= $estado["0"]["estado"];
$municipio = $municipio["0"]["municipio"];
$conexion =  mysql_connect($serverAddress, $user, $passwd);
mysql_select_db($dbName);
mysql_query ("SET NAMES 'utf8'");
mysql_query("UPDATE propiedades SET Direccion='$direccion', Colonia='$colonia', Estado='$estado', Municipio='$municipio', Construccion='$construccion', Unidad1='$unidad1', Terreno='$terreno', Unidad2='$unidad2', Precio='$precio', Moneda='$moneda', Piso='$piso', Cochera='$cochera', Cuarto='$cuarto', Bath='$bath', TOperacion='$toperacion', Antiguedad='$antiguedad', TPropiedad='$tpropiedad', FInicio='$finicio', FFin='$ffin', Descripcion='$descripcion', Coordenadas='$coordenadas' WHERE IdPropiedad='$id'");
$fotos = consultar("SELECT * FROM propiedades WHERE IdPropiedad= '$id'");
$old1= $fotos["0"]["Foto1"];
$old2= $fotos["0"]["Foto2"];
$old3= $fotos["0"]["Foto3"];
$old4= $fotos["0"]["Foto4"];
$old5= $fotos["0"]["Foto5"];
$old6= $fotos["0"]["Foto6"];
$rutaServidor = "property/".$id;
if ($_FILES["foto"]["name"]["0"] != ""){
	if($old1 != ""){
		unlink($old1);
	}
		$rutaTemporal = $_FILES["foto"]["tmp_name"]["0"];
		$nombreImagen = "img1.jpg";
		$foto1 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto1);
} else {
	$foto1 = $old1;
}

if ($_FILES["foto"]["name"]["1"] != ""){
	if($old2 != ""){
		unlink($old2);
	}
		$rutaTemporal = $_FILES["foto"]["tmp_name"]["1"];
		$nombreImagen = "img2.jpg";
		$foto2 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto2);
} else {
	$foto2 = $old2;
}

if ($_FILES["foto"]["name"]["2"] != ""){
	if($old3 != ""){
		unlink($old3);
	}
		$rutaTemporal = $_FILES["foto"]["tmp_name"]["2"];
		$nombreImagen = "img3.jpg";
		$foto3 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto3);
} else {
	$foto3 = $old3;
}

if ($_FILES["foto"]["name"]["3"] != ""){
	if($old4 != ""){
		unlink($old4);
	}
		$rutaTemporal = $_FILES["foto"]["tmp_name"]["3"];
		$nombreImagen = "img4.jpg";
		$foto4 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto4);
} else {
	$foto4 = $old4;
}

if ($_FILES["foto"]["name"]["4"] != ""){
	if($old5 != ""){
			unlink($old5);
	}
		$rutaTemporal = $_FILES["foto"]["tmp_name"]["4"];
		$nombreImagen = "img5.jpg";
		$foto5 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto5);
} else {
	$foto5 = $old5;
}

if ($_FILES["foto"]["name"]["5"] != ""){
	if($old6 != ""){
			unlink($old6);
	}
		$rutaTemporal = $_FILES["foto"]["tmp_name"]["5"];
		$nombreImagen = "img6.jpg";
		$foto6 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto6);
} else {
	$foto6 = $old6;
}

$conexion =  mysql_connect($serverAddress, $user, $passwd);
mysql_select_db($dbName);
mysql_query("UPDATE propiedades SET Foto1='$foto1', Foto2='$foto2', Foto3='$foto3', Foto4='$foto4', Foto5='$foto5', Foto6='$foto6' WHERE IdPropiedad='$id'");

echo "<script> alert(\"Editado exitosamente\"); </script>";
echo "<script type=text/javascript>window.location.href=\"../lista_propiedades.php\";</script>";
?>