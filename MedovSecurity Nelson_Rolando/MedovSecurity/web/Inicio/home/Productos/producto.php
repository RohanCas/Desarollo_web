<?php
require_once("conexion.php");

// Arreglo para almacenar las descripciones
$productosData = array();

if (isset($_GET['producto'])) {
    $producto = $_GET['producto'];

    $query = "SELECT Descripcion FROM productos WHERE ID_Producto =  1 ";

    // Preparar la consulta
    $stmt = $mysqli->prepare($query);
    // Puedes imprimir la consulta SQL aquí
    echo "Consulta SQL: " . $query;

    if ($stmt) {
        $stmt->bind_param("s", $productos);
        $stmt->execute();
        $stmt->bind_result($descripcion);

        if ($stmt->fetch()) {
            // Almacenar la descripción en el arreglo
            $productosData['descripcion'] = $descripcion;
        } else {
            $productosData['descripcion'] = "Producto no encontrado";
        }

        $stmt->close();
    } else {
        $productosData['descripcion'] = "Error en la consulta";
    }
} else {
    $productosData['descripcion'] = "No se proporcionó un nombre de producto";
}

// Convertir el arreglo en formato JSON
$productosJson = json_encode($productosData);

// Guardar el JSON en un archivo
file_put_contents('productos.json', $productosJson);

// Enviar la respuesta JSON al cliente
echo $productosJson;

?>
