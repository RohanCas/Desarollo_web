<?php
// Crear conexión
$conn = new mysqli("localhost", "root", "", "medovsecurity");

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa a la base de datos.";
}
?>
