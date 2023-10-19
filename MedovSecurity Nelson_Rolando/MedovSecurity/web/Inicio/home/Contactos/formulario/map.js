function initMap() {
    // Coordenadas de la ubicación en Tokyo, Japón (puedes cambiarlas)
    const tokyo = { lat: 35.682839, lng: 139.759455 };

    // Crea un nuevo mapa en el elemento con ID "map"
    const map = new google.maps.Map(document.getElementById('map'), {
        center: tokyo,
      zoom: 15, // Nivel de zoom
    });

    // Crea un marcador en la ubicación
    const marker = new google.maps.Marker({
        position: tokyo,
        map: map,
        title: 'MedovSecurity Tokyo',
    });
}