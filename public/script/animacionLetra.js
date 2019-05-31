var titulo= document.querySelector(".titulo");
var game= document.querySelector('.game');
var slot= document.querySelector('.slot');




function mover(){

 

    moverTitulo();
    async function moverTitulo(){
      TweenMax.from(game,1,{opacity:0 , x: -2000});

      await sleep(800);          
      caidaBalon();
    }

    /*
    function caidaBalon(){
    TweenMax.to(titulo, 3, {y:450});
    }
    */
   
  }

  titulo.addEventListener('click',mover);
  
 

