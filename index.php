<?php include("api/security.php"); ?>
<!DOCTYPE html>
<html>
	<head>
    	<meta charset="utf-8">
		<title>Bienvenido al sistema</title>
	</head>
	<body>
	<h1>Bienvenido <?php echo $_SESSION["username"] ?></h1>
	<ul>
		<li><a href="lista_propiedades.php">Inmuebles</a></li>
		<li><a href="mis_movimientos.php">Mis movimientos</a></li>
		<li><a href="api/exit.php">Salir</a></li>
	</ul>
	</body>
</html>