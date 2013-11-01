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
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script src="assets/js/libs/jQuerySliders.js"></script>
    <script src="assets/js/loadMap.js"></script>
  </head>
  <body>
    <header id="mainHeader">
      <section class="loginField">
      <div class="brandLogin"><p>Iniciar sesión</p><input id="logeado" type="hidden" value="<?php if(isset($_SESSION["autentica"])){echo $_SESSION["autentica"]; }else{echo "NO";} ?>"></div>
        <form id="loginForm" method="POST" action="api/login.php" style="display: none;">
          <input type="text" name="usuario" placeholder="Usuario">
          <input type="password" name="clave" placeholder="Password">
          <input type="submit" value="Ingresar">
        </form>
      </section>
      <div class="loginAs">
      </div>
      <div class="logoContainer">
        <img src="assets/img/mapaLogo.png">
      </div>
    </header>
    <aside id='filters'>
    </aside>
    <div id="mainContainer">
      <div id="mapDisplayer"></div>
    </div>
    <footer></footer>
    <!-- Scripting -->
    <script src="assets/js/mapaCustomaizer.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/router.js"></script>
    <script src="assets/js/templates.js"></script>
    <!-- Templates -->
    <script src="templates/loginAs.js"></script>
    <script src="templates/filters.js"></script>
    <!-- Collections -->
    <script src="assets/js/app/collections/properties.js"></script>
    <script src="assets/js/app/collections/prices.js"></script>
    <script src="assets/js/app/collections/habitaciones.js"></script>
    <!-- Models -->
    <!-- Views -->
    <script src="assets/js/app/views/indexView.js"></script>
    <script src="assets/js/app/views/loginView.js"></script>
    <script src="assets/js/app/views/filtersView.js"></script>

  </body>
</html>
