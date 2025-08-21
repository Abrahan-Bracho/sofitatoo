if(document.getElementById("boto_de_opciones") && document.getElementById("barra_opciones")){
    const boto_de_opciones = document.getElementById("boto_de_opciones");
    const barra_opciones = document.getElementById("barra_opciones");

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

    // Cerrar con botón X
    if(document.getElementById("boton_X_opciones")){
        document.getElementById("boton_X_opciones").addEventListener('click', function(){
            ocultarBarra();
        });
    }

    // Inicialmente oculta
    barra_opciones.dataset.visible = "false";
}

// Animación futurista con triángulos y clip-path para imágenes de la galería y mini galería
if (document.getElementById("contenedor_mini_galeria")) {
    const miniGaleriaImgs = document.querySelectorAll("#contenedor_mini_galeria .contenedor_foto_tatuaje");

    // Estado inicial: triángulo pequeño en la esquina superior izquierda
    miniGaleriaImgs.forEach(img => {
        gsap.set(img, { 
            opacity: 0, 
            y: 50, 
            clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" // Triángulo colapsado
        });
    });

    function animarMiniGaleria() {
        miniGaleriaImgs.forEach((img, i) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50 && !img.dataset.visible) {
                // Animación: triángulo se expande a toda la imagen
                gsap.to(img, {
                    opacity: 1,
                    y: 0,
                    clipPath: "polygon(100% 0, 100% 73%, 0 38%, 0 0)", // Triángulo grande
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(img, {
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Imagen completa
                            duration: 0,
                            ease: "power2.out"
                        });
                    }
                });
                img.dataset.visible = "true";
            }
        });
    }

    window.addEventListener('scroll', animarMiniGaleria);
    window.addEventListener('DOMContentLoaded', animarMiniGaleria);
    animarMiniGaleria();
}





