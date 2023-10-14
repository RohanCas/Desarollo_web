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

    // Crear el mensaje que se mostrará en la alerta
    const alertMessage = `
    Nombre: ${nombre}
    Correo: ${correo}
    Mensaje: ${mensaje}
    `;

    // Mostrar la alerta con los datos del formulario
    alert(alertMessage);

    // Puedes agregar aquí cualquier lógica adicional, como enviar los datos a un servidor.
});

// Obtener una referencia al botón de envío
const submitButton = document.querySelector('.submit');

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