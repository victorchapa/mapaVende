<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
<?php
	include("consultas.php");
	$nombre = $_POST["nombre"];
	$tel = $_POST["telefono"];
	$mail = $_POST["correo"];
	$comentario = $_POST["comentario"];
	$id= $_POST["id"];
	$propiedad = consultar("SELECT * FROM propiedades WHERE IdPropiedad='$id'");
	$direccion = $propiedad["0"]["Direccion"];
	$colonia = $propiedad["0"]["Colonia"];
	$estado = $propiedad["0"]["Estado"];
	$municipio = $propiedad["0"]["Municipio"];
	$sendTo = "apreza@gmail.com";
	$subject = "Mapavende";
	$headers = "Content-type: text/html\r\n";
	$headers .= "From: ".$mail."\r\n";
	$headers .= "Bcc: apreza@mapavende.com;\r\n";
	$message = ' <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><head> 
	<title>Contacto Mapavende</title>
	</head>
	<body>
	<h1>'.$nombre.' quiere contactarlo</h1> 
	<p>Teléfono del cliente: '.$tel.'</p>
	<p>El cliente ha comentado: '.$comentario.'</p>
	<h3>Detalles de la propiedad</h3>
	<p>Id: '.$id.'</p>
	<p>Dirección: '.$direccion.'</p>
	<p>Colonia: '.$colonia.'</p>
	<p>Estado/ Municipio: '.$estado.'/'.$municipio.'</p>
	</body>
	</html>';
	mail($sendTo, $subject, $message, $headers);
	echo "<script> alert(\"Se ha enviado un correo a la inmobiliaria\"); </script>";
	echo "<script type=text/javascript>window.location.href=\"../index.php\";</script>";
?>