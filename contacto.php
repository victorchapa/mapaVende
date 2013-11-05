<?php
	$id= $_GET["id"];
?>
<!DOCTYPE html>
<html>
	<head>
	    <meta charset="utf-8">
	    <title>MAPA Servicios Inmobiliarios</title>
	    <link rel="stylesheet" href="assets/css/main.css">
	    <link rel="stylesheet" href="assets/css/normalize.css">
      <script src="assets/js/libs/jquery.js"></script>
      <script src="assets/js/libs/underscore.js"></script>
      <script src="assets/js/contactValidation.js"></script>
	</head>
	<body>
	<div class="logoContainer"><img src="assets/img/mapaLogo.png"></div>
	<div class="contacto">
		<h2>Contactar con la inmobiliaria</h2>
		<form action="api/mail.php" method="POST" >
			<input type="hidden" name="id" value= "<?php echo $id; ?>">
			<p>Nombre (*)</p>
			<input type="text" name="nombre" />
			<p>Teléfono (*)</p>
			<input type="text" name="telefono"/>
			<p>E-mail (*)</p>
			<input type="email" name="correo" />
			<p class="comentario">Comentarios (*)</p>
			<textarea name="comentario" style="resize:none;" rows="5"></textarea>
			<p><input type="submit" class="btn-details btn-disabled btnenviar" value="Enviar" disabled/>
		</form>
	</div>
	<footer id="footer">
      <img class="triangulesFooter" src="assets/img/triangules.png"> 
      <div class="logosFooter">
        <img src="assets/img/contactUs.png">
        <img src="assets/img/ampiLogo.png">
        <img src="assets/img/realtorLogo.png">
      </div>
      <div class="backgroundFooter"></div>
    </footer>
	</body>
</html>
