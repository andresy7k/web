
// Función para obtener los temas
function obtenerTemas() {
  // API para obtener temas
  // ...

  // Reemplazar este código con la API que uses

  const temas = [
    {
      id: 1,
      titulo: "Tema 1",
      contenido: "Este es el contenido del tema 1",
      comentarios: [
        {
          autor: "Usuario 1",
          contenido: "Comentario 1"
        },
        {
          autor: "Usuario 2",
          contenido: "Comentario 2"
        }
      ]
    },
    {
      id: 2,
      titulo: "Tema 2",
      contenido: "Este es el contenido del tema 2",
      comentarios: []
    }
  ];

  return temas;
}

// Función para mostrar la lista de temas
function mostrarListaTemas(temas) {
  const listaTemas = document.getElementById('lista-temas');

  temas.forEach((tema) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.textContent = tema.titulo;
    p.textContent = tema.contenido;

    li.appendChild(h3);
    li.appendChild(p);

    listaTemas.appendChild(li);
  });
}

// Función para crear un nuevo tema
function crearTema(titulo, contenido) {
  // API para crear un nuevo tema
  // ...

  // Reemplazar este código con la API que uses

  console.log(`Creando tema: ${titulo}, ${contenido}`);

  // Mostrar mensaje de éxito o error
}
