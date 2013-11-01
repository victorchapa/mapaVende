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
	$disponible = "Si";

	$estado = consultar("SELECT estado FROM estados WHERE id_estado= '$id_estado'");
	$municipio = consultar("SELECT municipio FROM municipios WHERE id_municipio = $id_municipio");
	$estado= $estado["0"]["estado"];
	$municipio = $municipio["0"]["municipio"];
	$conexion =  mysql_connect($serverAddress, $user, $passwd);
	mysql_select_db($dbName);
	mysql_query ("SET NAMES 'utf8'");
	mysql_query("INSERT INTO propiedades (Direccion, Colonia, Estado, Municipio, Construccion, Unidad1, Terreno, Unidad2, Precio, Moneda, Piso, Cochera, Cuarto, Bath, TOperacion, Antiguedad, TPropiedad, FInicio, FFin, Descripcion, Coordenadas, Disponible) 
	VALUES ('$direccion', '$colonia', '$estado', '$municipio', '$construccion', '$unidad1', '$terreno', '$unidad2', '$precio', '$moneda', '$piso', '$cochera', '$cuarto', '$bath', '$toperacion', '$antiguedad', '$tpropiedad', '$finicio', '$ffin', '$descripcion', '$coordenadas', '$disponible')");
	$id= mysql_insert_id();
	mkdir ("property/".$id);
	$rutaServidor = "property/".$id;

	if ($_FILES["foto1"]["name"] != ""){
		$rutaTemporal = $_FILES["foto1"]["tmp_name"];
		$nombreImagen = "img1.jpg";
		$foto1 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto1);
	} else{
		$foto1= "";
	}

	if ($_FILES["foto2"]["name"] != ""){
		$rutaTemporal = $_FILES["foto2"]["tmp_name"];
		$nombreImagen = "img2.jpg";
		$foto2 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto2);
	} else{
		$foto2= "";
	}

	if ($_FILES["foto3"]["name"] != ""){
		$rutaTemporal = $_FILES["foto3"]["tmp_name"];
		$nombreImagen = "img3.jpg";
		$foto3 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto3);
	} else{
		$foto3= "";
	}

	if ($_FILES["foto4"]["name"] != ""){
		$rutaTemporal = $_FILES["foto4"]["tmp_name"];
		$nombreImagen = "img4.jpg";
		$foto4 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto4);
	} else{
		$foto4= "";
	}

	if ($_FILES["foto5"]["name"] != ""){
		$rutaTemporal = $_FILES["foto5"]["tmp_name"];
		$nombreImagen = "img5.jpg";
		$foto5 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto5);
	} else{
		$foto5= "";
	}

	if ($_FILES["foto6"]["name"] != ""){
		$rutaTemporal = $_FILES["foto6"]["tmp_name"];
		$nombreImagen = "img6.jpg";
		$foto6 = $rutaServidor.'/'.$nombreImagen;
		move_uploaded_file($rutaTemporal, $foto6);
	} else{
		$foto6= "";
	}

	$conexion =  mysql_connect($serverAddress, $user, $passwd);
	mysql_select_db($dbName);
	mysql_query("UPDATE propiedades SET Foto1='$foto1', Foto2='$foto2', Foto3='$foto3', Foto4='$foto4', Foto5='$foto5', Foto6='$foto6' WHERE IdPropiedad='$id'");
	echo "<script> alert(\"Agregado exitosamente\"); </script>";
	echo "<script type=text/javascript>window.location.href=\"../lista_propiedades.php\";</script>";
?>
</html> 
