document.addEventListener("DOMContentLoaded", function() {
  // Función para activar la ubicación del usuario
  document.getElementById("ubicacion-btn").addEventListener("click", function() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // Aquí puedes utilizar la posición del usuario para mostrar los centros de salud cercanos
        console.log("Ubicación obtenida:", position.coords.latitude, position.coords.longitude);
        // Aquí deberías integrar la lógica para mostrar los centros de salud en el mapa
      }, function(error) {
        console.error("Error al obtener la ubicación:", error.message);
      });
    } else {
      console.error("Geolocalización no soportada en este navegador");
    }
  });

  // Función para manejar clics en los enlaces de navegación
  document.querySelectorAll("nav ul li a").forEach(function(enlace) {
    enlace.addEventListener("click", function(evento) {
      evento.preventDefault(); // Evitar el comportamiento predeterminado del enlace

      // Obtener el ID de la sección a la que se hace clic
      var seccionId = this.getAttribute("href").substring(1);
      
      // Ocultar todas las secciones
      document.querySelectorAll("main section").forEach(function(seccion) {
        seccion.style.display = "none";
      });
      
      // Mostrar la sección correspondiente al enlace clicado
      document.getElementById(seccionId).style.display = "block";
    });
  });

  // Cargar las estadísticas dinámicamente
  fetch("url_de_tus_estadisticas_api")
    .then(response => response.json())
    .then(data => {
      const estadisticasContainer = document.getElementById("estadisticas-container");
      // Aquí debes crear el HTML para mostrar las estadísticas en estadisticasContainer
    })
    .catch(error => console.error("Error al obtener las estadísticas:", error));
});