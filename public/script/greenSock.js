

var botones = document.querySelectorAll(".imgAgregar");

function recorrerBotones(boton) {
  var tl = new TimelineLite();
  var hijo = boton.children[0];
  function moverCarrito() {

    
    tl.play();



    tl.to(hijo, 0.5, { x: "-90px", opacity: 0 },0.7)
      .to(hijo, 0.5, { x: "0px", opacity: 1 },0.9);
  

  }

  function volverCarrito() {



    tl.reverse();
    tl.to(hijo, 0.5, { x: "0px", opacity: 1 },0.7);

  }

  
function moverImg() {
  var box = document.querySelectorAll(".imgCarrito");

  tl.to(box,0.5,{rotation:360},0.7).to(box,0.5,{rotation:-360},0.9);

}

  boton.addEventListener('mouseenter', moverCarrito);
  boton.addEventListener('mouseout', volverCarrito);  
  boton.addEventListener('click', moverImg);  
}

if (botones != null) {
  //botones.forEach(recorrerBotones());
  botones.forEach(boton => {
    recorrerBotones(boton);
  });
}

//btn.addEventListener('mousemove', moverCarrito);  
var img = document.querySelector(".imgCarrito");


function moverImg() {
  var box = document.querySelectorAll(".imgCarrito");

  TweenMax.staggerTo(box, 1, { rotation: 360 }, 0.5);

}

function volverImg() {
  var box = document.querySelectorAll(".imgCarrito");


  TweenMax.to(box, 0.001, { rotation: -360 }, 0.5);
  //  TweenMax.staggerTo(box, 0.5, {rotation: 360},0.8);

}

img.addEventListener('mouseenter', moverImg);
img.addEventListener('mouseout', volverImg);    