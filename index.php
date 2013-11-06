<?php
  session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>MAPA Servicios Inmobiliarios</title>
    <link rel="stylesheet" href="assets/css/bootstrapModal.css">
    <link rel="stylesheet" href="assets/css/jQuerySliders.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <script src="assets/js/libs/jquery.js"></script>
    <script src="assets/js/libs/underscore.js"></script>
    <script src="assets/js/libs/backbone.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBAxo_84zcmEXyHVMZMavZtaDs3k2NYUw4&sensor=false"></script>
    <script src="assets/js/libs/jQuerySliders.js"></script>
    <script src="assets/js/libs/bootstrapModal.js"></script>
    <script src="assets/js/loadMap.js"></script>
  </head>
  <body>
    <section class="documentContainer">
      <header class="block">
        <div class='logoContainer'>
            <img src='assets/img/mapaLogo.png'>
        </div> 
      </header>
      <div class="block push">
        <aside id='filters'></aside>
        <div id="mainContainer">
          <div id="mapDisplayer"></div>
        </div>
      </div>
      <footer class="block">
        <img class="backgroundFooter" src="assets/img/backgroundFooter.png"> 
        <div class="logosFooter">
          <img src="assets/img/contactUs.png">
          <img src="assets/img/ampiLogo.png">
          <img src="assets/img/realtorLogo.png">
        </div>
      </footer>
    </section>
    <div class="modal" id="Modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h2 class="modal-title">Detalles de la Propiedad</h2>
          </div>
          <div id="modalDisplayer" class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-details" data-dismiss="modal">Cerrar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!-- Scripting -->
    <script src="assets/js/mapaCustomaizer.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/router.js"></script>
    <script src="assets/js/templates.js"></script>
    <!-- Templates -->
    <script src="templates/filters.js"></script>
    <script src="templates/property.js"></script>
    <!-- Collections -->
    <script src="assets/js/app/collections/properties.js"></script>
    <script src="assets/js/app/collections/prices.js"></script>
    <script src="assets/js/app/collections/habitaciones.js"></script>
    <!-- Models -->
    <script src="assets/js/app/models/property.js"></script>
    <!-- Views -->
    <script src="assets/js/app/views/indexView.js"></script>
    <script src="assets/js/app/views/filtersView.js"></script>

  </body>
</html>
