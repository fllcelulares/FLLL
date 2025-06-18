document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".carrusel-encabezado img");
  let indice = 0;

  setInterval(() => {
    imagenes[indice].classList.remove("active");
    indice = (indice + 1) % imagenes.length;
    imagenes[indice].classList.add("active");
  }, 3000); // 3000 milisegundos = 3 segundos
});
