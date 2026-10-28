
const formulario = document.getElementById("formulario");
const titulo = document.getElementById("titulo");
const contenido = document.getElementById("contenido");
const listaNotas = document.getElementById("listaNotas");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const textoTitulo = titulo.value.trim();
  const textoContenido = contenido.value.trim();

  // Evitar notas completamente vacías
  if (!textoTitulo && !textoContenido) {
    alert("Escribe un título o contenido para la nota.");
    return;
  }

  const nota = document.createElement("article");
  nota.className = "nota";

  const encabezado = document.createElement("h3");
  encabezado.textContent = textoTitulo || "Sin título";

  const parrafo = document.createElement("p");
  parrafo.textContent = textoContenido;

  const botonEliminar = document.createElement("button");
  botonEliminar.className = "eliminar";
  botonEliminar.textContent = "Eliminar";

  botonEliminar.addEventListener("click", function() {
    nota.remove();
  });

  nota.appendChild(encabezado);
  nota.appendChild(parrafo);
  nota.appendChild(botonEliminar);

  listaNotas.prepend(nota);
  formulario.reset();
});
