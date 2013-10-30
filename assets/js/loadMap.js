$(function(){
    var map;
    var colima = new google.maps.LatLng(19.243898246296943, -103.72979879379272);
    var mapOptions = {
        zoom: 13,
        center: colima,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var divToInsert = document.getElementById("mapDisplayer");
    divToInsert.style.width = "100%";
    divToInsert.style.height = "100%";

    map = new google.maps.Map(divToInsert, mapOptions);
    mapTable = {map: map};

    mapApplication();

    $("#slider").slider();
});
