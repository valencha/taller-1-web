var titulo= document.querySelector(".titulo");
var game= document.querySelector('.game');
var slot= document.querySelector('.slot');


TweenMax.from(game,1,{opacity:0 , x: -200});

function mover(){
    moverTitulo();
    async function moverTitulo(){
      TweenMax.to(titulo, 1, {y:100,x:100});
      TweenMax.to(titulo, 1, {y:0,x:500});
      TweenMax.to(titulo, 1, {y:30,x:800});

      TweenMax.to(titulo, 1, {scale:0.6});
      await sleep(800);          
      caidaBalon();
    }
    function caidaBalon(){
    TweenMax.to(titulo, 3, {y:450});
    }
  }

  titulo.addEventListener('onLoad',mover);
  
 

