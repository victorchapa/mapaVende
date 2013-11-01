<?php
  session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>MAPA Servicios Inmobiliarios</title>
    <link rel="stylesheet" href="assets/css/jQuerySliders.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/normalize.css">
    <script src="assets/js/libs/jquery.js"></script>
    <script src="assets/js/libs/underscore.js"></script>
    <script src="assets/js/libs/backbone.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBAxo_84zcmEXyHVMZMavZtaDs3k2NYUw4&sensor=false"></script>
    <script src="assets/js/libs/jQuerySliders.js"></script>
    <script src="assets/js/loadMap.js"></script>
  </head>
  <body>
    <header>
      <aside id='filters'></aside>
      <div id="mainContainer">
        <div id="mapDisplayer"></div>
      </div>
    </header>
    <footer id="footer">
      <img class="triangulesFooter" src="assets/img/triangules.png"> 
      <div class="logosFooter">
        <img src="assets/img/contactUs.png">
        <img src="assets/img/ampiLogo.png">
        <img src="assets/img/realtorLogo.png">
      </div>
      <div class="backgroundFooter"></div>
    </footer>
    <!-- Scripting -->
    <script src="assets/js/mapaCustomaizer.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/router.js"></script>
    <script src="assets/js/templates.js"></script>
    <!-- Templates -->
    <script src="templates/filters.js"></script>
    <!-- Collections -->
    <script src="assets/js/app/collections/properties.js"></script>
    <script src="assets/js/app/collections/prices.js"></script>
    <script src="assets/js/app/collections/habitaciones.js"></script>
    <!-- Models -->
    <!-- Views -->
    <script src="assets/js/app/views/indexView.js"></script>
    <script src="assets/js/app/views/filtersView.js"></script>

  </body>
</html>
