if(document.getElementById("boto_de_opciones")){
    const boto_de_opciones = document.getElementById("boto_de_opciones");

    boto_de_opciones.addEventListener('click',function(){boton_de_opcionesf();});

    function boton_de_opcionesf(){
        console.log("ok");
        gsap.to("#barra_opciones", {
                right: "5%",
                duration: 0.5, 
            });
    }
}
if(document.getElementById("boton_X_opciones")){
    const boto_de_opciones = document.getElementById("boton_X_opciones");

    boto_de_opciones.addEventListener('click',function(){boton_X_opcionesf();});

    function boton_X_opcionesf(){
        console.log("ok");
        gsap.to("#barra_opciones", {
                right: "-100%",
                duration: 0.5, 
            });
    }
}

// Animación on scroll para imágenes de la mini galería en index.html
if (document.getElementById("contenedor_mini_galeria")) {
    const miniGaleriaImgs = document.querySelectorAll("#contenedor_mini_galeria .contenedor_foto_tatuaje");

    // Inicialmente ocultar y posicionar abajo las imágenes y aplicar clip-path cerrado
    miniGaleriaImgs.forEach(img => {
        gsap.set(img, { opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" });
    });

    function animarMiniGaleria() {
        miniGaleriaImgs.forEach((img, i) => {
            const rect = img.getBoundingClientRect();

            if (rect.top < window.innerHeight - 50) {
                

                if (!img.dataset.visible) {
                    gsap.to(img, {
                        opacity: 1,
                        y: 0,
                        clipPath: "polygon(62% 0, 100% 0, 0 59%, 0 0)",
                        duration: 1,
                        delay: i * 0.1,
                        ease: "power2.out"
                    });
                    
                    
                }
            }
            if (rect.top < window.innerHeight - 80) {

                if (!img.dataset.visible) {
                    gsap.to(img, {
                        opacity: 1,
                        y: 0,
                        clipPath: "polygon(100% 0, 100% 60%, 0 59%, 0 0)",
                        duration: 1,
                        delay: i * 0.1,
                        ease: "power2.out"
                    });
                    
                    
                }
            } 
            if (rect.top < window.innerHeight - 80) {

                if (!img.dataset.visible) {
                    gsap.to(img, {
                        opacity: 1,
                        y: 0,
                        clipPath: "polygon(100% 0, 100% 100%, 0 64%, 0 0)",
                        duration: 1,
                        delay: i * 0.1,
                        ease: "power2.out"
                    });
                    
                    
                }
            } 
            if (rect.top < window.innerHeight - 50) {
                

                if (!img.dataset.visible) {
                    gsap.to(img, {
                        opacity: 1,
                        y: 0,
                        clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
                        duration: 1,
                        delay: i * 0.1,
                        ease: "power2.out"
                    });
                    
                    img.dataset.visible = "true";
                }
            }
        });
    }

    window.addEventListener('scroll', animarMiniGaleria);
    window.addEventListener('DOMContentLoaded', animarMiniGaleria);
    animarMiniGaleria();
}


