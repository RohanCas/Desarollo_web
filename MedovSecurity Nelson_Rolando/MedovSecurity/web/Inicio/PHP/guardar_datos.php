<?php
require_once("/DesarrolloPHP/MedoVSecurity Nelson_Rolando/MedovSecurity/web/Inicio/PHP/conexion.php"); // Asegúrate de incluir el archivo de conexión a la base de datos.

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    // Realiza la inserción en la base de datos
    $query = "INSERT INTO formulario (Nombre, Correo, Mensaje) VALUES (?, ?, ?)";

    $stmt = $mysqli->prepare($query);

    if ($stmt) {
        $stmt->bind_param("sss", $nombre, $correo, $mensaje);
        if ($stmt->execute()) {
            echo "Los datos se han guardado correctamente en la base de datos.";
        } else {
            echo "Error al guardar los datos en la base de datos: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Error en la consulta SQL: " . $mysqli->error;
    }
} else {
    echo "Acceso no permitido.";
}
?>
