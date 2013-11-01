TEMPLATES.filters = 
    "<script type='text/template'>" +
        "<h2>Filtros</h2>" +
        "<p>Tipo de Operación:</p> " +
            "<select name='TOperacion'>" +
                "<option value='Venta'>Venta</option>" +
                "<option value='Renta'>Renta</option>" +
                "<option value='Traspaso'>Traspaso</option>" +
            "</select>" +
        "<p>Tipo de Propiedad:</p>" +
            "<select name='TPropiedad'>" +
                "<option value='seleccionar'>Seleccione una unidad</option>" +
                "<option value='Casa'>Casa</option>" +
                "<option value='Terreno'>Terreno</option>" +
                "<option value='Edificio'>Edificio</option>" +
                "<option value='Local'>Local</option>" +
                "<option value='Oficina'>Oficina</option>" +
                "<option value='Terreno urbano'>Terreno urbano</option>" +
                "<option value='Terreno comercial'>Terreno comercial</option>" +
                "<option value='Terreno campestre'>Terreno campestre</option>" +
                "<option value='Bodega'>Bodega</option>" +
                "<option value='Rancho'>Rancho</option>" +
                "<option value='Departamento'>Departamento</option>" +
                "<option value='Hotel'>Hotel</option>" +
            "</select>" +
        "<p>Antigüedad</p>" +
            "<input type='radio' name='Antiguedad' value='Nueva'>Nueva " +
            "<input type='radio' name='Antiguedad' value='Usada'>Usada " +
            "<input type='radio' name='Antiguedad' value='Cualquiera'>Culaquiera " +
        "<div class='precio'>" +
            "<p>Precio: <input type='text' class='checkerSlider' id='priceChecker' readonly></p>" +
            "<div class='sliderP'></div>" +
        "</div>" +
        "<div class='habitaciones'>" +
            "<p>Habitaciones: <input type='text' class='checkerSlider' id='habChecker' readonly></p>" +
            "<div class='sliderH'></div>" +
        "</div>" +
    "<script>";
