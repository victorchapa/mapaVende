<?php //include("api/seguridad.php"); ?>
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
    <header>
      <section class="loginField">
        <div class="brandLogin"><p>Iniciar sesión</p></div>
        <form id="loginForm" method="POST" action="api/login.php">
          <input type="text" name="usuario" placeholder="Usuario">
          <input type="password" name="clave" placeholder="Password">
          <input type="submit" value="Ingresar">
        </form>
      </section>
      <div class="loginAs">
        <h1>Bienvenido <?php //echo $_SESSION["username"] ?></h1>
        <ul>
          <li><a href="lista_propiedades.php">Inmuebles</a></li>
          <li><a href="mis_movimientos.php">Mis movimientos</a></li>
          <li><a href="api/salir.php">Salir</a></li>
        </ul>
      </div>
      <div class="logoContainer">
        <img src="assets/img/mapaLogo.png">
      </div>
    </header>
    <aside id='filters'>
      <h2>Filtros</h2>
      <div id="slider"></div>
    </aside>
    <div id="mainContainer">
      <div id="mapDisplayer"></div>
    </div>
    <footer></footer>
    <!-- Scripting -->
    <script src="assets/js/mapaCustomaizer.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/router.js"></script>
    <!-- Templates -->
    <!-- Collections -->
    <!-- Models -->
    <!-- Views -->
  </body>
</html>
