<?php 
  include("../consultas.php");
  $propiedades = consultar("SELECT * FROM propiedades");
  echo json_encode($propiedades);
?>