// Obtener una referencia al botón de cambio de tamaño
const aumentarTamanoBtn = document.getElementById('aumentar-tamano-btn');
const disminuirTamanoBtn = document.getElementById('disminuir-tamano-btn');

// Función para cambiar el tamaño de fuente
function cambiarTamanoFuente(accion) {
    const cuadro = document.querySelector('.cuadro');
    const estilo = window.getComputedStyle(cuadro, null).getPropertyValue('font-size');
    const fontSize = parseFloat(estilo); // Obtiene el tamaño de fuente actual como un número

    if (accion === 'aumentar') {
        cuadro.style.fontSize = (fontSize + 2) + 'px'; // Aumenta el tamaño de fuente en 2px
    } else if (accion === 'disminuir') {
        cuadro.style.fontSize = (fontSize - 2) + 'px'; // Disminuye el tamaño de fuente en 2px
    }
}

// Asociar eventos de clic a los botones

aumentarTamanoBtn.addEventListener('click', function () {
    cambiarTamanoFuente('aumentar');
});

disminuirTamanoBtn.addEventListener('click', function () {
    cambiarTamanoFuente('disminuir');
});