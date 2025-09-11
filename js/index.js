

// dejar el menu anclado en el top cuando baje el sclorll



window.addEventListener('scroll', function () {



    // if (window.innerWidth = 768){
    //      if (y >= 1) {

    //     gsap.to(".logo_img ", {
    //         position: 'fixed',
    //         top: '5',
    //         left: '10',
    //         width: '70px',
    //         height: '70px',
    //         backgroundImage: 'url("../img/sofiatattoo.-Photoroom.png")',
    //     });


    //     }
    //     if (y >= 360) {


    //         gsap.to(".boto_de_opciones ", {
    //             position: 'fixed',
    //             top: '5',
    //             width: '60px',
    //             height: '60px',

    //         });
    //     }

    //     if (y <= 200) {
    //         gsap.to(".logo_img ", {
    //             position: 'static',
    //             width: '300px',
    //             height: '300px',
    //             backgroundImage: 'url("../img/sofiatatoo_letras.png")',
    //         });

            
    //     }
    //     if (y <= 360) {

    //         gsap.to(".boto_de_opciones ", {
    //             position: 'static',
    //             width: '75px',
    //             height: '75px',

    //         });
    //     }

    // }
    // if (window.innerWidth <= 768){
    //     var y = window.scrollY;
    //     console.log( y)
    //     if (y >= 150) {

    //         gsap.to(".logo_img ", {
    //             position: 'fixed',
    //             top: '5',
    //             left: '10',
    //             width: '70px',
    //             height: '70px',
    //             backgroundImage: 'url("../img/sofiatattoo.-Photoroom.png")',
    //         });


    //     }
    //     if (y >= 360) {


    //         gsap.to(".boto_de_opciones ", {
    //             position: 'fixed',
    //             top: '5',
    //             width: '60px',
    //             height: '60px',

    //         });
    //     }

    //     if (y <= 200) {
    //         gsap.to(".logo_img ", {
    //             position: 'static',
    //             width: '300px',
    //             height: '300px',
    //             backgroundImage: 'url("../img/sofiatatoo_letras.png")',
    //         });

            
    //     }
    //     if (y <= 360) {

    //         gsap.to(".boto_de_opciones ", {
    //             position: 'static',
    //             width: '75px',
    //             height: '75px',

    //         });
    //     }
    // }
    
    
});




if (document.getElementById("boto_de_opciones") && document.getElementById("barra_opciones")) {
    const boto_de_opciones = document.getElementById("boto_de_opciones");
    const barra_opciones = document.getElementById("barra_opciones");
    const cerrar_barra = document.getElementById("cerrar_barra"); // add this






    function mostrarBarra() {
        gsap.to(barra_opciones, {
            right: isMobileScreen() ? '0' : '5%',
            duration: 0.5
        });

        document.body.classList.add('overflow-hidden');
        barra_opciones.dataset.visible = "true";
    }



    function ocultarBarra() {
        gsap.to(barra_opciones, {
            right: "-100%",
            duration: 0.5
        });
        document.body.classList.remove('overflow-hidden');
        barra_opciones.dataset.visible = "false";
    }

    boto_de_opciones.addEventListener('click', function () {
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

function isMobileScreen() {
    return window.innerWidth <= 768;
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


const imagenes_galeria = document.querySelectorAll('.contenedor_foto_tatuaje img');

if (imagenes_galeria) {

    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const lightboxcloseboton = document.createElement('button');
    lightboxcloseboton.classList.add('lightbox-close');
    lightboxcloseboton.innerHTML = 'Atras ';





    imagenes_galeria.forEach((imagen) => {




        imagen.addEventListener("click", function (e) {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = imagen.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
            lightbox.style.animation = "cargarTriangulos 0.5s linear forwards";
            lightbox.appendChild(lightboxcloseboton);



            document.body.classList.add('overflow-hidden');

        }
        );

        lightbox.addEventListener('click', e => {

            if (e.target !== e.currentTarget) return;
            lightbox.style.animation = "bay-img 0.5s linear forwards";
            setTimeout(function () {
                lightbox.classList.remove('active');
                console.log("va bien");
                document.body.classList.remove('overflow-hidden');
            }, 500);



        });


        lightboxcloseboton.addEventListener('click', e => {
            lightbox.style.animation = "bay-img 0.5s linear forwards";
            setTimeout(function () {
                lightbox.classList.remove('active');
                console.log("va bien");
                document.body.classList.remove('overflow-hidden');
            }, 500);
        });
    });
}


const formulario_de_contacto = document.getElementById('formulario_de_contacto');

const formulario_nombre = document.querySelector('#nombre');
const formulario_apellido = document.querySelector('#apellido');
const formulario_medidas_del_tatuaje = document.querySelector('#medidas_del_tatuaje');
const formulario_descripsion = document.querySelector('#descripsion');





if (formulario_de_contacto) {

    formulario_de_contacto.addEventListener('submit', function (event) {
        event.preventDefault();

        const datos_formulario = new FormData(formulario_de_contacto);

        const nombre = datos_formulario.get('nombre');
        const apellido = datos_formulario.get('apellido');
        const medida = datos_formulario.get('medidas');
        const descripsion = datos_formulario.get('descripsion');

        const baseUrl = "https://wa.me/584126433811?text=";
        let textUrlVar = `Hola, mi nombre es ${nombre} ${apellido} y estoy interesado en un tatuaje de ${medida} centimetros de acuerdo a esta descripcion: ${descripsion}`;
        const messageUrl = baseUrl + encodeURIComponent(textUrlVar);

        window.open(messageUrl, '_blank');
    });
}

// document.getElementById("boton_X_opciones").addEventListener('click', function(){
//             ocultarBarra();
//         });












// Efecto de agrandar imagen al hacer click en galería y mini galería


// if (document.getElementById("contenedor_mini_galeria")) {
//     // Selecciona todas las imágenes dentro de .contenedor_foto_tatuaje
//     const galeriaImgs = document.querySelectorAll("#contenedor_mini_galeria .contenedor_foto_tatuaje");

//     galeriaImgs.forEach(img => {
//         img.style.cursor = "pointer";
//         img.addEventListener("click", function (e) {
//             e.stopPropagation();
//             // Si ya está agrandada, quítala
//             if (img.classList.contains("img-grande")) {
//                 img.classList.remove("img-grande");
//                 document.body.classList.remove("no-scroll");
//             } else {
//                 // Quita la clase a cualquier otra imagen agrandada
//                 document.querySelectorAll(".img-grande").forEach(el => el.classList.remove("img-grande"));
//                 img.classList.add("img-grande");
//                 document.body.classList.add("no-scroll");
//             }
//         });
//     });

//     // Al hacer click fuera de la imagen, quitar el agrandado
//     document.addEventListener("click", function(e) {
//         const imgGrande = document.querySelector(".img-grande");
//         if (imgGrande && !imgGrande.contains(e.target)) {
//             imgGrande.classList.remove("img-grande");
//             document.body.classList.remove("no-scroll");
//         }
//     });
// }






