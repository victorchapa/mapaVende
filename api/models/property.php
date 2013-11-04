<?php
	include ("../consultas.php");
	$id_propiedad = $_GET["id"];
	$propiedad = consultar("SELECT * FROM propiedades WHERE IdPropiedad= '$id_propiedad'");
	echo json_decode($propiedad)
?>