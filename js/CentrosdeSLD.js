// Función para obtener la ubicación del usuario
function obtenerUbicacion() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Función para mostrar el mapa
function mostrarMapa(latitud, longitud) {
  const mapa = L.map('mapa').setView([latitud, longitud], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  L.marker([latitud, longitud]).addTo(mapa);
}
