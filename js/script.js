const botonConocerMasStats = document.getElementById('boton-conocer-mas-stats');
botonConocerMasStats.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = "estadisticas.html";
  }, 300);
});

const stats = document.getElementById('encabezado-stats');
stats.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = "estadisticas.html";
  }, 300);
});

const botonConocerMasMaps = document.getElementById('boton-conocer-mas-maps');
botonConocerMasMaps.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = "CentrosdeSalud.html";
  }, 300);
});

const maps = document.getElementById('encabezado-centrosdesld');
maps.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = "CentrosdeSalud.html";
  }, 300);
});

const botonConocerMasForos = document.getElementById('boton-conocer-mas-foros');
botonConocerMasForos.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = "foro.html";
  }, 300);  
});

const foros = document.getElementById('encabezado-foros');
foros.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = "foro.html";
  }, 300);
});

const login = document.getElementById('encabezado-login');
login.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = "login.html";
  }, 300);
});
