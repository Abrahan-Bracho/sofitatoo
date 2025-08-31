if(document.getElementById("boto_de_opciones") && document.getElementById("barra_opciones")){
    const boto_de_opciones = document.getElementById("boto_de_opciones");
    const barra_opciones = document.getElementById("barra_opciones");
    const cerrar_barra = document.getElementById("cerrar_barra"); // add this

    function mostrarBarra() {
        gsap.to(barra_opciones, {
            right: "5%",
            duration: 0.5
        });
        barra_opciones.dataset.visible = "true";
    }

    function ocultarBarra() {
        gsap.to(barra_opciones, {
            right: "-100%",
            duration: 0.5
        });
        barra_opciones.dataset.visible = "false";
    }

    boto_de_opciones.addEventListener('click', function() {
        if (barra_opciones.dataset.visible === "true") {
            ocultarBarra();
        } else {
            mostrarBarra();
        }
    });

    if (cerrar_barra) {
        cerrar_barra.addEventListener('click', ocultarBarra);
    }

    // Inicialmente oculta
    barra_opciones.dataset.visible = "false";
}

// Animación futurista con triángulos y clip-path para imágenes de la galería y mini galería
if (document.getElementById("contenedor_mini_galeria")) {
    const miniGaleriaImgs = document.querySelectorAll("#contenedor_mini_galeria .contenedor_foto_tatuaje");

    // Estado inicial: oculto y clip-path cerrado
    miniGaleriaImgs.forEach(img => {
        img.style.opacity = "0";
        img.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)";
        img.style.animation = "none";
    });

    function animarMiniGaleria() {
        miniGaleriaImgs.forEach((img, i) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50 && !img.dataset.visible) {
                img.style.opacity = "1";
                img.style.animation = "cargarTriangulos 0.7s linear forwards";
                img.dataset.visible = "true";
            }
        });
    }

    window.addEventListener('scroll', animarMiniGaleria);
    window.addEventListener('DOMContentLoaded', animarMiniGaleria);
    animarMiniGaleria();
}





