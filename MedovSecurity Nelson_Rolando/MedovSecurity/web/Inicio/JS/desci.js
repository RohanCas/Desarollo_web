document.addEventListener("DOMContentLoaded", function () {
    const productImages = document.querySelectorAll('.product-image');
    const descripcionProducto = document.getElementById('descripcion-producto');

    productImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            const productName = image.alt;

            fetch('/DesarrolloPHP/MedoVSecurity Nelson_Rolando/MedovSecurity/web/Inicio/HTMLS/productos.json')
                .then(response => response.json())
                .then(data => {
                    if (data[productName]) {
                        descripcionProducto.textContent = data[productName];
                    } else {
                        descripcionProducto.textContent = 'Descripción no encontrada.';
                    }
                })
                .catch(error => {
                    descripcionProducto.textContent = 'Error al cargar la descripción.';
                });
        });

        image.addEventListener('mouseout', () => {
            descripcionProducto.textContent = '';
        });
    });
});
