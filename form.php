﻿<?php
include("seguridad.php");
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
$bathroom = $_POST['bathroom'];
$toperacion = $_POST['toperacion'];
$tpropiedad = $_POST['tpropiedad'];
$fecha_inicio = $_POST['fecha_inicio'];
$fecha_fin = $_POST['fecha_fin'];

mysql_connect("localhost", "mapavend_israel", "israel2013");
mysql_select_db("mapavend_prueba");
$estado = mysql_query("SELECT estado FROM estados WHERE id_estado= '$id_estado'");
$municipio = mysql_query("SELECT municipio FROM municipios WHERE id_municipio = $id_municipio");
$municipio = mysql_fetch_array($municipio);
$estado= mysql_fetch_array($estado);

mysql_query("INSERT INTO propiedades (Direccion, Colonia, Estado, Municipio, Construccion, Unidad1, Terreno, Unidad2, Precio, Moneda, Piso, Cochera, Cuarto, Bathroom, Toperacion, Tpropiedad, Fecha_inicio, Fecha_fin) 
VALUES ('$direccion', '$colonia', '$estado[0]', '$municipio[0]', '$construccion', '$unidad1', '$terreno', '$unidad2', '$precio', '$moneda', '$piso', '$cochera', '$cuarto', '$bathroom', '$toperacion', '$tpropiedad', '$fecha_inicio', '$fecha_fin')");
echo "<script> alert(\"Agregado exitosamente\"); </script>";
echo "<script type=text/javascript>window.location.href=\"lista_propiedades.php\";</script>";
?> 