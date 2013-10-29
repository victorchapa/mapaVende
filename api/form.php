<?php
include("seguridad.php");
include("consultas.php");
require("dbConfig.php");
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
$disponible = "Si";

$estado = consultar("SELECT estado FROM estados WHERE id_estado= '$id_estado'");
$municipio = consultar("SELECT municipio FROM municipios WHERE id_municipio = $id_municipio");
$estado= $estado["0"]["estado"];
$municipio = $municipio["0"]["municipio"];
$conexion =  mysql_connect($serverAddress, $user, $passwd);
mysql_select_db($dbName);
mysql_query("INSERT INTO propiedades (Direccion, Colonia, Estado, Municipio, Construccion, Unidad1, Terreno, Unidad2, Precio, Moneda, Piso, Cochera, Cuarto, Bath, TOperacion, TPropiedad, FInicio, FFin, Descripcion, Coordenadas, Disponible) 
VALUES ('$direccion', '$colonia', '$estado', '$municipio', '$construccion', '$unidad1', '$terreno', '$unidad2', '$precio', '$moneda', '$piso', '$cochera', '$cuarto', '$bath', '$toperacion', '$tpropiedad', '$finicio', '$ffin', '$descripcion', '$coordenadas', '$disponible')");
echo "<script> alert(\"Agregado exitosamente\"); </script>";
echo "<script type=text/javascript>window.location.href=\"../lista_propiedades.php\";</script>";
?> 