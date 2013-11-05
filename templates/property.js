TEMPLATES.property = 
    "<script type='text/template' id='thisTemplate'>" + 
    "<div class='propertyContainer'>" +
        "<div class='property'>" +
            "<h1>Detalles de la propiedad</h1>" +
            "<input type= 'text' hidden='true' name='id_propiedad' value='<% print(property.IdPropiedad) %>'>" +
            "<p>Dirección: <% print(property.Direccion) %></p>" +
            "<p>Colonia: <% print(property.Colonia) %></p>" +
            "<p>Estado: <% print(property.Estado) %></p>" +
            "<p>Municipio: <% print(property.Municipio) %></p>" +
            "<p>Tamaño de la construcción: <% print(property.Construccion) %>"+" "+"<% print(property.Unidad1) %></p>" +
            "<p>Tamaño del terreno: <% print(property.Terreno)"+" "+"<% print(property.Unidad2) %></p>" +
            "<p>Fecha de inicio: <% print(property.FInicio) %></p>" +
            "<p>Fecha de cierre: <% print(property.FFin') %></p>" +
            "<p>Descripción: <% print(property.Descripcion) %></p>" +
            "<a href='api/'><img src='api/' width='150' height='150'></a>" +
            "<% if() %>" +
            "<% if (property.Foto2 != ""){" +
            "print('<a href='api/'><img src='api' width='150' height='150'></a>')" +
            "} %>"+
            "<% if (property.Foto3 != ""){" +
            "print('<a href='api/'><img src='api' width='150' height='150'></a>')" +
            "} %>"+
            "<% if (property.Foto4 != ""){" +
            "print('<a href='api/'><img src='api' width='150' height='150'></a>')" +
            "} %>"+
            "<% if (property.Foto5 != ""){" +
            "print('<a href='api/'><img src='api' width='150' height='150'></a>')" +
            "} %>"+
            "<% if (property.Foto6 != ""){" +
            "print('<a href='api/'><img src='api' width='150' height='150'></a>')" +
            "} %>"+
            "<a href ='contacto.php?id=<% property.IdPropiedad %>'>Contacto</a>" +
        "</div>" +
    "</div>" +
    "</script>";