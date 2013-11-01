<?php 
  include("../consultas.php");
  $habitaciones = consultar("SELECT Cuarto FROM propiedades ORDER BY Cuarto DESC");
  echo json_encode($habitaciones);
?>
