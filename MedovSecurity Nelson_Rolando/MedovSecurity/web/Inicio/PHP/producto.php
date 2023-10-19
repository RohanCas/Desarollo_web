<?php
require_once("conexion.php");

// Arreglo para almacenar las descripciones
$productosData = array();

// Recuperar todos los productos de la base de datos
$query = "SELECT NombreProducto, Descripcion FROM productos";
$result = $mysqli->query($query);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $nombreProducto = $row['NombreProducto'];
        $descripcion = $row['Descripcion'];
        $productosData[$nombreProducto] = $descripcion;
    }
    $result->close();
}

// Convertir el arreglo en formato JSON
$productosJson = json_encode($productosData);

// Guardar el JSON en un archivo llamado "productos.json"
file_put_contents('productos.json', $productosJson);

// Enviar la respuesta JSON al cliente
echo $productosJson;
?>
