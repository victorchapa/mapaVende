TEMPLATES.loginAs = 
    "<script type='text/template'>" +
        "<% if(logeado == 'SI') {%>" +
            "<h1>Bienvenido</h1>" +
            "<ul>" +
                "<li><a href='lista_propiedades.php'>Inmuebles</a></li>" +
                "<li><a href='mis_movimientos.php'>Mis movimientos</a></li>" +
                "<li><a href='api/exit.php'>Salir</a></li>" +
            "</ul>" +
        "<% }else{ %>" +
            "<h1>Bienvenido</h1>" +
            "<p>¡Encuentre los mejores lugares <span class='bold'>fácil</span> y <span class='bold'>rápido</span>!</p>" +
        "<% } %>" +
    "</script>";
