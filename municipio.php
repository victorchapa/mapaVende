<?php
header('Content-type: application/json; charset=iso-8859-1');
include("consultas.php");
$id= $_POST['id_estado'];
$resultados= consultar("SELECT * FROM municipios WHERE id_estado=$id");
echo json_encode($resultados);
?>
