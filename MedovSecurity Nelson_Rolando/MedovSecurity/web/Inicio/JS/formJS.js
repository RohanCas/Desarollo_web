// Obtener una referencia al formulario
const form = document.querySelector('.form');

// Agregar un evento 'submit' al formulario
form.addEventListener('submit', function (event) {
    // Evitar que el formulario se envíe de manera predeterminada
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Mostrar una alerta con los datos que se van a enviar
    alert(`Datos enviados:\nNombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`);

    // Crear un objeto FormData para enviar los datos del formulario
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('correo', correo);
    formData.append('mensaje', mensaje);

    // Crear una solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '../PHP/guardar_datos.php', true);

    // Configurar una función que se llamará cuando se complete la solicitud
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // La solicitud se completó con éxito
            alert('Los datos se han guardado correctamente en el servidor.');
        } else {
            // La solicitud falló
            alert('Error al enviar los datos al servidor.');
        }
    };

    // Enviar la solicitud con los datos del formulario
    xhr.send(formData);
});

// Obtener una referencia al botón de envío
const submitButton = document.querySelector('#submit-button');

// Agregar un evento 'mouseover' al botón de envío
submitButton.addEventListener('mouseover', function () {
    // Cambiar el color de fondo cuando el mouse se posa sobre el botón
    submitButton.style.backgroundColor = 'blue';
});

// Agregar un evento 'mouseout' al botón de envío para restaurar el color original
submitButton.addEventListener('mouseout', function () {
    // Restaurar el color de fondo cuando el mouse sale del botón
    submitButton.style.backgroundColor = '';
});
