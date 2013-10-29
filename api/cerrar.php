<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<meta http-equiv="Content-Type" content="text/html" />
<meta charset="utf-8">
<?php
include("seguridad.php");
require("dbConfig.php");
$id = $_POST['id_propiedad'];
$precio = $_POST['precio'];
$moneda = $_POST['moneda'];
$ffin = $_POST['fecha_fin'];
$cierre = $_POST['cierre'];

$conexion =  mysql_connect($serverAddress, $user, $passwd);
mysql_select_db($dbName);
mysql_query ("SET NAMES 'utf8'");
mysql_query("UPDATE propiedades SET Precio='$precio', Moneda='$moneda', FFin='$ffin', Disponible='$cierre' WHERE IdPropiedad='$id'");
echo "<script> alert(\"Cerrado exitosamente\"); </script>";
echo "<script type=text/javascript>window.location.href=\"../mis_movimientos.php\";</script>";
?>
</html>