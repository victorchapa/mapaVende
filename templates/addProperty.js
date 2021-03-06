TEMPLATES.addProperty = 
    "<script type='text/template'>" +
  "<div class='guide'>" +
  "<ul>" +
    "<li><a href='http://vimeo.com/15888243'>Video tutorial agregar propiedad</a></li>" +
    "<li><a href='http://vimeo.com/17195272'>Video tutorial redimencionar imagen</a></li>" +
    "<li><a href='http://www.ampicolima.com.mx/admin/archivos/vso_redimensionar.exe'>Baja aqui software redimenicionar</a></li>" +
  "</ul>" +
  "</div>" +
  "<div class='formAgregar' onload='load();' onunload='GUnload();'>" +
    "<h1>Agregar propiedad</h1>" +
    "<form name ='form' method='post' action='api/addProperty.php' enctype='multipart/form-data'>" +
      "<p>Dirección: <input type= 'text' name='direccion'/></p>" +
      "<p>Colonia: <input type= 'text' name='colonia'/></p>" +
      "<p>Estado: <select name='estado' class='cambiar'>"+
        "<option value='0'>Seleccione un estado</option>" +
        "<% _.each(estados, function(estado) { %>" +
            "<option value='<% print(estado.id_estado); %>'><% print(estado.estado); %></option>" +
        "<% }); %>" +
      "</select></p>" +
      "<p>Municipio: <select name='municipio' class='municipio'>" +
        "<option>Seleccione un municipio</option>" +
      "</select></p>" +
      "<p>Superficie de construcción: <input type='text' name='construccion'/>" +
      " <select name='unidad1'>" +
      "<option value='M2'>M2</option>" +
      "<option value='Hectarea'>Hectarea</option>" +
      "<option value='Acre'>Acre</option>" +
      "</select></p>" +
      "<p>Superficie del terreno: <input type='text' name='terreno'/>" +
      " <select name='unidad2'>" +
      "<option value='M2'>M2</option>" +
      "<option value='Hectarea'>Hectarea</option>" +
      "<option value='Acre'>Acre</option>" +
      "</select></p>" +
      "<p>Precio: <input type='text' name='precio'></input>" +
      " <select name='moneda'>" +
      "<option value='Pesos'>Pesos</option>" +
      "<option value='Dolares'>Dolares</option>" +
      "<option value='por M2'>por M2</option>" +
      "<option value='por Hectarea'>por M2</option>" +
      "</select></p>" +
      "<p>Piso(s): <select name='piso'>" +
      "<option value ='1'>1</option>" +
      "<option value ='2'>2</option>" +
      "<option value ='3'>3</option>" +
      "<option value ='4'>4</option>" +
      "</select></p>" +
      "<p>Cochera(s): <select name='cochera'>" +
      "<% for (i=0; i<10; i++){ %>" +
        "<option value='<% print(i); %>'><% print(i); %></option>" +
        "<% } %>" +
        "<option value='mas de 9'>mas de 9</option>" +
      "</select></p>" +
      "<p>Cuarto(s): <select name='cuarto'>" +
      "<% for (i=0; i<7; i++){ %>" +
        "<option value='<% print(i); %>'><% print(i); %></option>" +
      "<% } %>" +
        "<option value='varios'>varios</option>" +
      "</select></p>" +
      "<p>Baño(s): <select name='bath'>" +
      "<% for (i=0; i<7; i++){ %>" +
        "<option value='<% print(i); %>'><% print(i); %></option>" +
      "<% } %>" +
      "<% for (i=1.5; i<7.5; i++){ %>" +
        "<option value='<% print(i); %>'><% print(i); %></option>" +
      "<% } %>" +
        "<option value='mas de 8'>mas de 8</option>" +
      "</select></p>" +
      "<p>Tipo de operacion: <select name='toperacion'>" +
            "<option value ='seleccionar'>Seleccione una unidad</option>" +
            "<option value ='Venta'>Venta</option>" +
            "<option value ='Renta'>Renta</option>" +
            "<option value ='Traspaso'>Traspaso</option>" +
        "</select></p>" +
      "<p>Antigüedad: <select name='antiguedad'>" +
          "<option value ='seleccionar'>Seleccione la una opción</option>" +
          "<option value ='Nueva'>Nueva</option>" +
          "<option value ='Usada'>Usada</option>" +
      "</select></p>" +
      "<p>Tipo de propiedad: <select name='tpropiedad'>" +
          "<option value ='seleccionar'>Seleccione una unidad</option>" +
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
      "<p>Fecha inicio de disponibilidad: <input type='text' class='datePicker' name='finicio'><p>" +
      "<p>Fecha final de disponibilidad: <input type='text' class='datePicker' name='ffin'><p>" +
      "<p>Descripción: </p>" +
      "<textarea id='descripcion' name='descripcion' rows='5' maxlength='500'></textarea>" +
      "<p>Imagenes (máximo 6): <input type='file' name='foto[]' multiple='multiple' accept='image/jpeg, image/bmp'>" +
      "<p>Coordenadas: <input type='text' name='coordenadas' readonly='readonly' style='width: 180px;'/></p>" +
      "<div id='map' style='width: 600px; height: 400px; position: relative; background-color: rgb(229, 227, 223);'>" +
      "</div>" +
      "<p><input class='btnNaranja' type='submit' name='agregar' value='Agregar'></p>" +
    "</form>" +
  "</div>" +
    "</script>";
