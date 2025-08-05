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


