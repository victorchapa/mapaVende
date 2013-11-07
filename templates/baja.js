TEMPLATES.baja = 
    "<script type='text/template'>" +
    "<form method='post' action='api/cerrar.php'>" +
    "<input type= 'text' hidden='true' name='id_propiedad' value='<% print(property.IdPropiedad); %>'/>" +
    "<p>Dirección: <input type= 'text' disabled='true' name='direccion' value='<% print(property.Direccion); %>'/></p>" +
    "<p>Colonia: <input type= 'text' disabled='true' name='colonia' value='<% print(property.Colonia); %>'/></p>" +
    "<p>Estado: <input type= 'text' disabled='true' name='estado' value='<% print(property.Estado); %>'/></p>" +
    "<p>Municipio: <input type= 'text' disabled='true' name='municipio' value='<% print(property.Municipio); %>'/></p>" +
    "<p>Fecha de inicio: <input type= 'text' disabled='true' name='fecha_inicio' value='<% print(property.FInicio); %>'/></p>" +
    "<p>Tipo de cierre: <select name='cierre'>" +
    "<option value='0'>Seleccione una opción</option>" +
    "<option value='Crédito'>Crédito</option>" +
    "<option value='Contado'>Contado</option>" +
    "<option value='Fovisste'>Fovisste</option>" +
    "<option value='Infonavit'>Infonavit</option>" +
    "<option value='Crédito Bancario'>Crédito Bancario</option>" +
    "<option value='Subsidio'>Subsidio</option>" +
    "<option value='Baja'>Baja</option>" +
    "<option value='Renta'>Renta</option>" +
    "</select>" +
    "<p>Precio final: <input type='text' name='precio'/>" +
    "<select name='moneda'>" +
    "<option value='0'>Seleccione una opción</option>" +
    "<option value='Pesos'>Pesos</option>" +
    "<option value='Dolares'>Dolares</option>" +
    "<option value='por metro cuadrado'>por metro cuadrado</option>" +
    "<option value='por hectarea'>por hectarea</option>" +
    "</select></p>" +
    "<input type='submit' name='guardar' value='Guardar'>" +
    "</form>" +
    "</script>";