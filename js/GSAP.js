

let iteradorRedes = 0;

const redes = document.querySelector("#redes"); 
const redes_links = document.querySelector("#redes_links"); 


redes.addEventListener('click', redesF);

function redesF(){

    
    if(iteradorRedes === 0){
        gsap.to("#facebook", {
            
            display: "block",
            zIndex : 3,
            duration: 0.1, x: -30, y: -90  ,
            cursor: "pointer"
        });

        gsap.to("#instagram", {
            
            display: "block",
            duration: 0.1, x: 70, y: -70 ,
            cursor: "pointer"   
        });
        gsap.to("#github", {
            
            display: "block",
            duration: 0.1, x: 90, y: 30,
            cursor: "pointer"  
        });
        iteradorRedes = 1;
    }else{
        gsap.to("#facebook", {
            duration: 0.1, x: 0, y: 0  
            
        });
        gsap.to("#facebook", {
            display: "none",
            delay: 0.01
            
        });
        gsap.to("#instagram", {
            duration: 0.1, x: 0, y: 0  
            
        });
        gsap.to("#instagram", {
            display: "none",
            delay: 0.01
            
        });
        gsap.to("#github", {
            duration: 0.1, x: 0, y: 0  
        });
        gsap.to("#github", {
            display: "none",
            delay: 0.01
            
        });
        iteradorRedes = 0;
            
        
    }
}





const facebook = document.querySelector(".facebook ");
const hover = gsap.to(facebook, {
  scaleX: 1.1, scaleY:1.1, scaleZ:1.1,
  duration: 0.1
});

facebook.addEventListener("mouseenter", () => hover.play());
facebook.addEventListener("mouseleave", () => hover.reverse());


const instagram = document.querySelector(".instagram");
const hover2 = gsap.to(instagram, {
  scaleX: 1.1, scaleY:1.1, scaleZ:1.1,
  duration: 0.1
});

instagram.addEventListener("mouseenter", () => hover2.play());
instagram.addEventListener("mouseleave", () => hover2.reverse());

const github = document.querySelector(".github");
const hover3 = gsap.to(github, {
  scaleX: 1.1, scaleY:1.1, scaleZ:1.1,
  duration: 0.1
});

github.addEventListener("mouseenter", () => hover3.play());
github.addEventListener("mouseleave", () => hover3.reverse());




//----------------------------------------------------


// if(document.querySelector("#ejemplo_pagina") ){



        
//     const ejemplo_pagina = document.querySelector("#ejemplo_pagina"); 
//     const miart_desc = document.querySelector("#miart_desc"); 
//     const textoMAs = document.getElementById("textoMAs");
//     let iteradorMas = 0;



//     ejemplo_pagina.addEventListener('click', function(){ejemplo_paginaF();});


//     function ejemplo_paginaF(){
        

//         if(iteradorMas === 0){

//             miart_desc.style.display = "block";

//             gsap.to("#miart_desc", {
//                 opacity: 1,
//                 duration: 0.1,  y: 300  
//             });
//             gsap.to("#miart_desc", {
//                 delay: 0.4,
//                 zIndex: 2
                
//             });
//             textoMAs.innerHTML ="MENOS";
//             iteradorMas = 1;
//             gsap.to("#ejemplos_paginas", {
//                 duration: 0.3,
//                  height: 600
                
//             });
            
//             textoMAs.innerHTML ="MENOS";
//             iteradorMas = 1;
        
//         }else{

//             gsap.to("#miart_desc", {
//                 zIndex: -1,
                
//             });
//             gsap.to("#miart_desc", {
//                 duration: 0.1,  y: 0 ,
//                 delay: 0.4,
//                 opacity: 0
//             });
//             gsap.to("#ejemplos_paginas", {
//                 delay: 0.4,
//                 duration: 0.3,
//                 height: 500
               
//            });
           
            
//             textoMAs.innerHTML ="MAS";
//             iteradorMas = 0;
                
            
//         }
        
//     }
// }