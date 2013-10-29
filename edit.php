<?php
//include("seguridad.php");
$id_propiedad = $_POST['id_propiedad'];
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
$descripcion = $_POST['descripcion'];
$coordenadas = $_POST['coordenadas'];

mysql_connect("localhost", "mapavend_israel", "israel2013");
mysql_select_db("mapavend_prueba");
$estado = mysql_query("SELECT estado FROM estados WHERE id_estado= '$id_estado'");
$municipio = mysql_query("SELECT municipio FROM municipios WHERE id_municipio = $id_municipio");
$municipio = mysql_fetch_array($municipio);
$estado= mysql_fetch_array($estado);
mysql_query("UPDATE propiedades SET Direccion='$direccion', Colonia='$colonia', Estado='$estado[0]', Municipio='$municipio[0]', Construccion='$construccion', Unidad1='$unidad1', Terreno='$terreno', Unidad2='$unidad2', Precio='$precio', Moneda='$moneda', Piso='$piso', Cochera='$cochera', Cuarto='$cuarto', Bathroom='$bathroom', Toperacion='$toperacion', Tpropiedad='$tpropiedad', Fecha_inicio='$fecha_inicio', Fecha_fin='$fecha_fin', Coordenadas='$coordenadas' WHERE id_propiedad='$id_propiedad'");
echo "<script> alert(\"Editado exitosamente\"); </script>";
echo "<script type=text/javascript>window.location.href=\"lista_propiedades.php\";</script>";
?>