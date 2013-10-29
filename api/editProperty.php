<?php
	include("seguridad.php");
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
$tpropiedad = $_POST['tpropiedad'];
$finicio = $_POST['finicio'];
$ffin = $_POST['ffin'];
$descripcion = $_POST['descripcion'];
$coordenadas = $_POST['coordenadas'];

$conexion =  mysql_connect($serverAddress, $user, $passwd);
mysql_select_db($dbName);
mysql_query ("SET NAMES 'utf8'");
$estado = consultar("SELECT estado FROM estados WHERE id_estado= '$id_estado'");
$municipio = consultar("SELECT municipio FROM municipios WHERE id_municipio = $id_municipio");
$estado= $estado["0"]["estado"];
$municipio = $municipio["0"]["municipio"];
mysql_query("UPDATE propiedades SET Direccion='$direccion', Colonia='$colonia', Estado='$estado', Municipio='$municipio', Construccion='$construccion', Unidad1='$unidad1', Terreno='$terreno', Unidad2='$unidad2', Precio='$precio', Moneda='$moneda', Piso='$piso', Cochera='$cochera', Cuarto='$cuarto', Bathroom='$bath', Toperacion='$toperacion', Tpropiedad='$tpropiedad', FInicio='$finicio', FFin='$ffin', Coordenadas='$coordenadas' WHERE IdPropiedad='$id'");
$fotos = consultar("SELECT * FROM propiedades WHERE IdPropiedad= '$id'");
$old1= $fotos["0"]["Foto1"];
$old2= $fotos["0"]["Foto2"];
$old3= $fotos["0"]["Foto3"];
$old4= $fotos["0"]["Foto4"];
$old5= $fotos["0"]["Foto5"];
$old6= $fotos["0"]["Foto6"];
$rutaServidor = "property/".$id;
if ($_FILES["foto1"]["name"] != ""){
	if($old1 != ""){
		unlink($old1);
	}
		$rutaTemporal = $_FILES["foto1"]["tmp_name"];
		$nombreImagen = "img1.jpg";
		$foto1 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto1);
} else {
	$foto1 = $old1;
}

if ($_FILES["foto2"]["name"] != ""){
	if($old2 != ""){
		unlink($old2);
	}
		$rutaTemporal = $_FILES["foto2"]["tmp_name"];
		$nombreImagen = "img2.jpg";
		$foto2 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto2);
} else {
	$foto2 = $old2;
}

if ($_FILES["foto3"]["name"] != ""){
	if($old3 != ""){
		unlink($old3);
	}
		$rutaTemporal = $_FILES["foto3"]["tmp_name"];
		$nombreImagen = "img3.jpg";
		$foto3 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto3);
} else {
	$foto3 = $old3;
}

if ($_FILES["foto4"]["name"] != ""){
	if($old4 != ""){
		unlink($old4);
	}
		$rutaTemporal = $_FILES["foto4"]["tmp_name"];
		$nombreImagen = "img4.jpg";
		$foto4 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto4);
} else {
	$foto4 = $old4;
}

if ($_FILES["foto5"]["name"] != ""){
	if($old5 != ""){
			unlink($old5);
	}
		$rutaTemporal = $_FILES["foto5"]["tmp_name"];
		$nombreImagen = "img5.jpg";
		$foto5 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto5);
} else {
	$foto5 = $old5;
}

if ($_FILES["foto6"]["name"] != ""){
	if($old6 != ""){
			unlink($old6);
	}
		$rutaTemporal = $_FILES["foto6"]["tmp_name"];
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