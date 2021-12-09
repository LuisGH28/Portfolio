const enlaces = document.getElementsByClassName("enlaces")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuMenu = document.getElementById("menu");

let abierto = false;

const toggleMenu = () => {
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

menu.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true;
    }else{
        abierto=false;
    }
})


window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(abierto){
        if(e.target !== menuMenu){
            toggleMenu();
            abierto = false;
        }
    }
})


window.addEventListener("resize", function(){
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto = false;
        }
    }
})


function inicio(){
    document.getElementById("#uno").innerHTML = "hola soy luis";
}

function acercaDeMi(){
    document.getElementById("#dos").innerHTML = "soy un programador movil junior";
}

function contacto(){
    document.getElementById("#tres").innerHTML = "puedes buscarme en fb como luisgh";
}