<?php 
  include("../consultas.php");
  $propiedades = consultar("SELECT * FROM propiedades WHERE Disponible ='Si'");
  echo json_encode($propiedades);
?>