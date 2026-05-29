
console.log("LectoScan iniciado");

// EFECTO SUAVE AL HACER SCROLL

window.addEventListener("scroll", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {

    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";

    }

  });

});


const galleryImages =
document.querySelectorAll(".gallery img");

const viewer =
document.getElementById("imageViewer");

const viewerImg =
document.getElementById("viewerImg");

const closeViewer =
document.querySelector(".close-viewer");

// ABRIR IMAGEN

galleryImages.forEach(img => {

  img.addEventListener("click", () => {

    viewer.classList.add("active");

    viewerImg.src = img.src;

  });

});

// CERRAR CON X

closeViewer.addEventListener("click", () => {

  viewer.classList.remove("active");

});

// CERRAR TOCANDO FONDO

viewer.addEventListener("click", (e) => {

  if(e.target !== viewerImg){

    viewer.classList.remove("active");

  }

});
