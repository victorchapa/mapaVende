<?php 
  include("../consultas.php");
  $estados = consultar("SELECT * FROM estados");
  echo json_encode($estados);
?>