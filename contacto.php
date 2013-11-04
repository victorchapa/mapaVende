<?php
	$id= $_GET["id"];
?>
<form action="api/mail.php" method="POST" >
	<input type="hidden" name="id" value= "<?php echo $id; ?>">
	<p>Nombre</p><input type="text" name="nombre" />
	<p>Teléfono</p><input type="text" name="telefono"/>
	<p>E-mail</p><input type="email" name="correo" />
	<p class="comentario">Comentarios</p><textarea name="comentario"></textarea>
	<p><input type="submit" class="btnenviar" value="Enviar"/>
</form>