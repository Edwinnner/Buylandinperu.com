<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Estate Perú</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
</head>
<body>
    <header>
        <h1>Bienvenido a Real Estate Perú</h1>
    </header>
    <section id="map"></section>
    <section id="listings"></section>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="scripts.js"></script>
</body>
</html>
<script>
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([-9.19, -75.0152], 6); // Centro de Perú

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Añadir marcadores (ejemplo)
    const markers = [
        { lat: -12.0464, lng: -77.0428, title: 'Lima' },
        { lat: -13.5320, lng: -71.9675, title: 'Cusco' }
    ];

    markers.forEach(marker => {
        L.marker([marker.lat, marker.lng]).addTo(map)
            .bindPopup(marker.title);
    });
});
</script>
