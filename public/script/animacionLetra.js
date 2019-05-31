var titulo= document.querySelector(".titulo");
var game= document.querySelector('.game');
var slot= document.querySelector('.slot');





function mover(){
  TweenMax.from(titulo, 1, { opacity: 0 , x: -2000});

    }
  

    /*
    function caidaBalon(){
    TweenMax.to(titulo, 3, {y:450});
    }
    */

  window.addEventListener('mouseenter',mover);

 

