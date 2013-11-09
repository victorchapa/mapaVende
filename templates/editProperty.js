TEMPLATES.editProperty = 
    "<script type='text/template'>" +
  "<div class='guide'>" +
  "<ul>" +
    "<li><a href='http://vimeo.com/15888243'>Video tutorial agregar propiedad</a></li>" +
    "<li><a href='http://vimeo.com/17195272'>Video tutorial redimencionar imagen</a></li>" +
    "<li><a href='http://www.ampicolima.com.mx/admin/archivos/vso_redimensionar.exe'>Baja aqui software redimenicionar</a></li>" +
  "</ul>" +
  "</div>" +
  "<div class='formAgregar' onload='load();' onunload='GUnload();'>" +
    "<h1>Editar propiedad</h1>" +
    "<% console.log(propertyData); %>" +
    "<form name ='form' method='post' action='api/editProperty.php' enctype='multipart/form-data'>" +
      "<input type='hidden' name='id' value='<% print(propertyData.IdPropiedad); %>'></input>" +
      "<p>Dirección: <input type= 'text' name='direccion' value='<% print(propertyData.Direccion); %>'/></p>" +
      "<p>Colonia: <input type= 'text' name='colonia' value='<% print(propertyData.Colonia); %>'/></p>" +
      "<p>Estado: <select name='estado' class='cambiar'>"+
            "<option value='<% print(propertyData.Estado); %>'><% print(propertyData.Estado); %></option>" +
            "<% _.each(propertyData.estados, function(estado) { %>" +
                "<option value='<% print(estado.id_estado); %>'><% print(estado.estado); %></option>" +
            "<% }); %>" +
        "</select></p>" +
      "<p>Municipio: <select name='municipio' class='municipio'>" +
        "<option value='<% print(propertyData.Municipio); %>'><% print(propertyData.Municipio); %></option>" +
      "</select></p>" +
      "<p>Superficie de construcción: <input type='text' name='construccion' value='<% print(propertyData.Construccion); %>'/>" +
      " <select name='unidad1'>" +
        "<option value='<% print(propertyData.Unidad1); %>'><% print(propertyData.Unidad1); %></option>" +
      "<option value='M2'>M2</option>" +
      "<option value='Hectarea'>Hectarea</option>" +
      "<option value='Acre'>Acre</option>" +
      "</select></p>" +
      "<p>Superficie del terreno: <input type='text' name='terreno' value='<% print(propertyData.Terreno); %>'/>" +
      " <select name='unidad2'>" +
        "<option value='<% print(propertyData.Unidad2); %>'><% print(propertyData.Unidad2); %></option>" +
      "<option value='M2'>M2</option>" +
      "<option value='Hectarea'>Hectarea</option>" +
      "<option value='Acre'>Acre</option>" +
      "</select></p>" +
      "<p>Precio: <input type='text' name='precio' value='<% print(propertyData.Precio); %>'/>" +
      " <select name='moneda'>" +
        "<option value='<% print(propertyData.Moneda); %>'><% print(propertyData.Moneda); %></option>" +
        "<option value='Pesos'>Pesos</option>" +
        "<option value='Dolares'>Dolares</option>" +
        "<option value='por M2'>por M2</option>" +
        "<option value='por Hectarea'>por M2</option>" +
      "</select></p>" +
      "<p>Piso(s): <select name='piso'>" +
        "<option value='<% print(propertyData.Piso); %>'><% print(propertyData.Piso); %></option>" +
        "<option value ='1'>1</option>" +
        "<option value ='2'>2</option>" +
        "<option value ='3'>3</option>" +
        "<option value ='4'>4</option>" +
      "</select></p>" +
      "<p>Cochera(s): <select name='cochera'>" +
        "<option value='<% print(propertyData.Cochera); %>'><% print(propertyData.Cochera); %></option>" +
      "<% for (i=0; i<10; i++){ %>" +
        "<option value='<% print(i); %>'><% print(i); %></option>" +
        "<% } %>" +
        "<option value='mas de 9'>mas de 9</option>" +
      "</select></p>" +
      "<p>Cuarto(s): <select name='cuarto'>" +
        "<option value='<% print(propertyData.Cuarta); %>'><% print(propertyData.Cuarto); %></option>" +
      "<% for (i=0; i<7; i++){ %>" +
        "<option value='<% print(i); %>'><% print(i); %></option>" +
      "<% } %>" +
        "<option value='varios'>varios</option>" +
      "</select></p>" +
      "<p>Baño(s): <select name='bath'>" +
        "<option value='<% print(propertyData.Bath); %>'><% print(propertyData.Bath); %></option>" +
      "<% for (i=0; i<7; i++){ %>" +
        "<option value='<% print(i); %>'><% print(i); %></option>" +
      "<% } %>" +
      "<% for (i=1.5; i<7.5; i++){ %>" +
        "<option value='<% print(i); %>'><% print(i); %></option>" +
      "<% } %>" +
        "<option value='mas de 8'>mas de 8</option>" +
      "</select></p>" +
      "<p>Tipo de operacion: <select name='toperacion'>" +
            "<option value='<% print(propertyData.TOperacion); %>'><% print(propertyData.TOperacion); %></option>" +
            "<option value ='Venta'>Venta</option>" +
            "<option value ='Renta'>Renta</option>" +
            "<option value ='Traspaso'>Traspaso</option>" +
        "</select></p>" +
      "<p>Antigüedad: <select name='antiguedad'>" +
          "<option value='<% print(propertyData.Antiguedad); %>'><% print(propertyData.Antiguedad); %></option>" +
          "<option value ='Nueva'>Nueva</option>" +
          "<option value ='Usada'>Usada</option>" +
      "</select></p>" +
      "<p>Tipo de propiedad: <select name='tpropiedad'>" +
          "<option value='<% print(propertyData.TPropiedad); %>'><% print(propertyData.TPropiedad); %></option>" +
          "<option value ='Casa'>Casa</option>" +
          "<option value ='Terreno'>Terreno</option>" +
          "<option value ='Edificio'>Edificio</option>" +
          "<option value ='Local'>Local</option>" +
          "<option value ='Oficina'>Oficina</option>" +
          "<option value ='Terreno urbano'>Terreno urbano</option>" +
          "<option value ='Terreno comercial'>Terreno comercial</option>" +
          "<option value ='Terreno campestre'>Terreno campestre</option>" +
          "<option value ='Bodega'>Bodega</option>" +
          "<option value ='Rancho'>Rancho</option>" +
          "<option value ='Departamento'>Departamento</option>" +
          "<option value ='Hotel'>Hotel</option>" +
      "</select></p>" +
      "<p>Fecha inicio de disponibilidad: <input type='text' id='datePicker' name='finicio' value='<% print(propertyData.FInicio); %>'><p>" +
      "<p>Fecha final de disponibilidad: <input type='text' id='datePicker' name='ffin' value='<% print(propertyData.FFin); %>'><p>" +
      "<p>Descripción: <textarea id='descripcion' name='descripcion' rows='10' maxlength='500' ><% print(propertyData.Descripcion); %></textarea>" +
      "<p>Imagenes (máximo 6): <input type='file' name='foto[]' multiple='multiple' accept='image/jpeg, image/bmp'>" +
      "<p>Coordenadas: <input type='text' name='coordenadas' readonly='readonly' value='<% print(propertyData.Coordenadas); %>' style='width: 180px;'/></p>" +
      "<div id='map' style='width: 600px; height: 400px; position: relative; background-color: rgb(229, 227, 223);'>" +
      "</div>" +
      "<p><input type='submit' name='agregar' value='Agregar'></p>" +
    "</form>" +
  "</div>" +
    "</script>";
