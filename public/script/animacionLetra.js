var titulo= document.querySelector(".titulo");

function mover(){
    lanzarBalon();
    async function lanzarBalon(){
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

  titulo.addEventListener('load',mover);
  
 

