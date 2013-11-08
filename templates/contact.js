TEMPLATES.contact = 
    "<script type='text/template'>" +
        "<div class='contactForm'>" +
            "<div class='headerContact'>" +
                "<h3>Llamanos al: (312) 161-4450 ó </h3>" +
                "<h3>Enviar un correo electronico</h3>" +
            "</div>" +
            "<form action='api/mail.php' method='POST'>" +
                "<input type='hidden' name='id' value='<% print(propertyId); %>'>" +
                "<p>Nombre (*)</p><input type='text' name='nombre'/></p>" +
                "<p>Teléfono (*)</p><input type='text' name='telefono'/></p>" +
                "<p>E-mail (*)</p><input type='email' name='correo' placeholder='ejemplo@ejemplo.com'/></p>" +
                "<p class='comentario'>Comentarios (*)</p><textarea name='comentario' rows='5'></textarea></p>" +
                "<p id='botonContacto'><input type='submit' class='btn-details btn-disabled btnenviar' value='Enviar' disabled/></p>" +
            "</form>" +
        "</div>" +
    "</script>";
