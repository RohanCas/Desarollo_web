<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "medovsecurity";

$mysqli = new mysqli($servername, $username, $password, $database);

if ($mysqli->connect_error) {
    die("Error de conexión a la base de datos: " . $mysqli->connect_error);
}
?>
