<?php
include("security.php");
require("dbConfig.php");
$id = $_POST['id_propiedad'];
$precio = $_POST['precio'];
$moneda = $_POST['moneda'];
$ffin = date("d/m/Y");
$cierre = $_POST['cierre'];

$conexion =  mysql_connect($serverAddress, $user, $passwd);
mysql_select_db($dbName);
mysql_query ("SET NAMES 'utf8'");
mysql_query("UPDATE propiedades SET Precio='$precio', Moneda='$moneda', FFin='$ffin', Disponible='$cierre' WHERE IdPropiedad='$id'");
echo "<script> alert(\"Cerrado exitosamente\"); </script>";
echo "<script type=text/javascript>window.location.href=\"../mis_movimientos.php\";</script>";
?>