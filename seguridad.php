<?php
@session_start();

if($_SESSION["autentica"] != "SI"){
echo "<script type=text/javascript>window.location.href=\"autenticar.php\";</script>";
exit();
}
?>