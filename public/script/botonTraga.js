

function loadPage(){

var botonTraga= document.querySelector('.botonTraga');

function aviso(){
    if(scrollY >= 900){
        botonTraga.style.transition = 'display 0.4s';
        //navbar.style.backdrop-filter = 'blur(2px)';
        botonTraga.style.display = 'block';
        
        TweenLite.to(botonTraga, 1, { ease: Bounce.easeOut, y: 10 });
        //TweenMax.to('.botonTraga', 1, {opacity:1, y:0, delay:1, ease: Back.easeOut.config(1.7)});
      }else{
        botonTraga.style.display = 'none';
      }
}

window.addEventListener('scroll', aviso);


}
window.addEventListener('load', loadPage);