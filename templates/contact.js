TEMPLATES.contact = 
    "<script type='text/template'>" +
        "<?php $id= $_GET['id'];?>" +
        "<form action='api/mail.php' method='POST'>" +
        "<input type='hidden' name='id' value='<?php echo $id; ?>'>" +
        "<p>Nombre</p><input type='text' name='nombre'/></p>" +
        "<p>Teléfono</p><input type='text' name='telefono'/></p>" +
        "<p>E-mail</p><input type='email' name='correo'/></p>" +
        "<p class='comentario'>Comentarios</p><textarea name='comentario'></textarea></p>" +
        "<p><input type='submit' class='btnenviar' value='Enviar'/></p>" +
        "</form>" +
    "</script>";