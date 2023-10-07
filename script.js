// Este script agrega la funcionalidad de desplazamiento suave al hacer clic en el indicador de desplazamiento
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Agrega un desplazamiento suave
    });
}

let infoVisible = false;

function toggleInfo() {
    const infoContainer = document.querySelector(".info-container");
    infoVisible = !infoVisible;

    if (infoVisible) {
        infoContainer.classList.add("active");
    } else {
        infoContainer.classList.remove("active");
    }
}
