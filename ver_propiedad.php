	<div class="propertyContainer">
		<div class="property">
		<h1>Detalles de la propiedad</h1>
		"<input type= 'text' hidden='true' name='id_propiedad' value='".$propiedad['0']['IdPropiedad']."'>";
		"<p>Dirección: ".$propiedad['0']['Direccion']."</p>";
		"<p>Colonia: ".$propiedad['0']['Colonia']."</p>";
		"<p>Estado: ".$propiedad['0']['Estado']."</p>";
		"<p>Municipio: ".$propiedad['0']['Municipio']."</p>";
		"<p>Tamaño de la construcción: ".$propiedad['0']['Construccion']." ".$propiedad['0']['Unidad1']."</p>";
		"<p>Tamaño del terreno: ".$propiedad['0']['Terreno']." ".$propiedad['0']['Unidad2']."</p>";
		"<p>Fecha de inicio: ".$propiedad['0']['FInicio']."</p>";
		"<p>Fecha de cierre: ".$propiedad['0']['FFin']."</p>";
		"<p>Descripción: ".$propiedad['0']['Descripcion']."</p>";
		"<a href='api/".$propiedad['0']['Foto1']."'><img src='api/".$propiedad['0']['Foto1']."'width='150' height='150'></a>";
		if ($propiedad['0']['Foto2'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto2']."'><img src='api/".$propiedad['0']['Foto2']."'width='150' height='150'></a>";
		}
		if ($propiedad['0']['Foto3'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto3']."'><img src='api/".$propiedad['0']['Foto3']."'width='150' height='150'></a>";
		}
		if ($propiedad['0']['Foto4'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto4']."'><img src='api/".$propiedad['0']['Foto4']."'width='150' height='150'></a>";
		}
		if ($propiedad['0']['Foto5'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto5']."'><img src='api/".$propiedad['0']['Foto5']."'width='150' height='150'></a>";
		}
		if ($propiedad['0']['Foto6'] != ""){
			echo "<a href='api/".$propiedad['0']['Foto6']."'><img src='api/".$propiedad['0']['Foto6']."'width='150' height='150'></a>";
		}
	?>
		</div>
	</div>
	<footer id="footer">
      <img class="triangulesFooter" src="assets/img/triangules.png"> 
      <div class="logosFooter2">
        <img src="assets/img/contactUs.png">
        <img src="assets/img/ampiLogo.png">
        <img src="assets/img/realtorLogo.png">
      </div>
      <div class="backgroundFooter"></div>
    </footer>
	</body>
</html>