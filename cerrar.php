<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<meta http-equiv="Content-Type" content="text/html" />
<meta charset="utf-8">
<?php
include("seguridad.php");
$id_propiedad = $_POST['id_propiedad'];
$precio = $_POST['precio'];
$moneda = $_POST['moneda'];
$fecha_fin = $_POST['fecha_fin'];
$cierre = $_POST['cierre'];

if ($cierre == "0"){
echo "<script> alert(\"Debes seleccionar la razón del cierre\"); </script>";
echo "<script type=text/javascript>window.location.href=\"baja.php?id=$id_propiedad\";</script>";
}
if ($precio == ""){
echo "<script> alert(\"Debes escribir el precio\"); </script>";
echo "<script type=text/javascript>window.location.href=\"baja.php?id=$id_propiedad\";</script>";
}
if ($moneda == "0"){
echo "<script> alert(\"Debes elegir el tipo de moneda\"); </script>";
echo "<script type=text/javascript>window.location.href=\"baja.php?id=$id_propiedad\";</script>";
}
mysql_connect("localhost", "mapavend_israel", "israel2013");
mysql_select_db("mapavend_prueba");
mysql_query("UPDATE propiedades SET Precio='$precio', Moneda='$moneda', Fecha_fin='$fecha_fin', Disponibilidad='$cierre' WHERE id_propiedad='$id_propiedad'");
echo "<script> alert(\"Cerrado exitosamente\"); </script>";
echo "<script type=text/javascript>window.location.href=\"mis_movimientos.php\";</script>";
?>
</html>