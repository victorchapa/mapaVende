<?php 
  include("../consultas.php");
  $precios = consultar("SELECT Precio FROM propiedades ORDER BY Precio DESC");
  echo json_encode($precios);
?>
