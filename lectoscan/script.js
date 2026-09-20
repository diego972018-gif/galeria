
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


viewer.addEventListener("click", (e) => {

  if(e.target !== viewerImg){

    viewer.classList.remove("active");

  }

});
function sendFeedback(){

  const name = document.getElementById("feedbackName").value.trim();
  const type = document.getElementById("feedbackType").value;
  const message = document.getElementById("feedbackMessage").value.trim();

  if(message === ""){
    alert("Por favor escribe tu sugerencia o reporte.");
    return;
  }

  const subject = encodeURIComponent(
    "LectoScan - " + type
  );

  const body = encodeURIComponent(
    "Hola Diego,\n\n" +
    "Tipo: " + type + "\n" +
    "Nombre: " + (name || "Usuario de LectoScan") + "\n\n" +
    "Mensaje:\n" +
    message +
    "\n\nEnviado desde la plataforma LectoScan."
  );

  window.location.href =
    "mailto:diego972018@gmail.com?subject=" +
    subject +
    "&body=" +
    body;
}
