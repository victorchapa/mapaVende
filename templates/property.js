TEMPLATES.property = 
    "<script type='text/template'>" + 
    "<div class='propertyContainer'>" +
        "<div class='property'>" +
            "<input type= 'text' hidden='true' name='idPropiedad' value='<% print(property.IdPropiedad); %>'>" +
            "<div class='toContactForm'>" +
                "<a href ='#'>" +
                    "<input id='showContactForm' class='btn-default' type='button' value='Contacto'>" +
                "</a>" +
            "</div>" +
            "<p><span class='bold'>Dirección:</span> <% print(property.Direccion); %></p>" +
            "<p><span class='bold'>Colonia:</span> <% print(property.Colonia); %></p>" +
            "<div class='mainImage'>" +
                "<% if(property.Foto1 != '') { %>" +
                    "<a href='api/<% print(property.Foto1); %>' target='_blank'><img src='api/<% print(property.Foto1); %>' width='150' height='150'></a>" +
                "<% } else { %>" +
                    "<img src='assets/img/noPhoto.png'>" +
                "<% } %>" +
            "</div>" +
            "<p><span class='bold'>Estado:</span> <% print(property.Estado); %></p>" +
            "<p><span class='bold'>Municipio:</span> <% print(property.Municipio); %></p>" +
            "<p><span class='bold'>Tamaño de la construcción:</span> <% print(property.Construccion); %>"+" "+"<% print(property.Unidad1); %></p>" +
            "<p><span class='bold'>Tamaño del terreno:</span> <% print(property.Terreno); %>"+" "+"<% print(property.Unidad2); %></p>" +
            "<p><span class='bold'>Descripción:</span> <% print(property.Descripcion); %></p>" +
            "<% if (property.Foto2 != '') { %>" +
                "<p class='showMorePhotos'>Mostrar más fotos...</p>" +
                "<div class='imgGroup'>" +
                    "<input id='backImg' type='button' class='arrowBack'/>" +
                    "<input id='nextImg' type='button' class='arrowNext'/>" +
                    "<ul>" +
                "<% if (property.Foto2 != '') { %>" +
                    "<li><a href='api/<% print(property.Foto2); %>' target='_blank'><img src='api/<% print(property.Foto2); %>' width='150' height='150'></a></li>" +
                "<% } %>"+
                "<% if (property.Foto3 != '') { %>" +
                    "<li><a href='api/<% print(property.Foto3); %>' target='_blank'><img src='api/<% print(property.Foto3); %>' width='150' height='150'></a></li>" +
                "<% } %>"+
                "<% if (property.Foto4 != '') { %>" +
                    "<li><a href='api/<% print(property.Foto4); %>' target='_blank'><img src='api/<% print(property.Foto4); %>' width='150' height='150'></a></li>" +
                "<% } %>"+
                "<% if (property.Foto5 != '') { %>" +
                    "<li><a href='api/<% print(property.Foto5); %>' target='_blank'><img src='api/<% print(property.Foto5); %>' width='150' height='150'></a></li>" +
                "<% } %>"+
                "<% if (property.Foto6 != '') { %>" +
                    "<li><a href='api/<% print(property.Foto6); %>' target='_blank'><img src='api/<% print(property.Foto6); %>' width='150' height='150'></a></li>" +
                "<% } %>"+
                    "</ul>" +
                "</div>" +
            "<% } %>" +
        "</div>" +
    "</div>" +
    "</script>";
