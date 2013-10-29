<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<?php include("api/seguridad.php"); ?>
<head>
<title>
Bienvenido al sistema
</title>
<head>
<body>
<h1>Bienvenido <?php echo $_SESSION["username"] ?></h1>
<ul>
	<li><a href="lista_propiedades.php">Inmuebles</a></li>
	<li><a href="mis_movimientos.php">Mis movimientos</a></li>
	<li><a href="api/salir.php">Salir</a></li>
</ul>
</body>
</html>