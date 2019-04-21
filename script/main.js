 
  var miniaturas = document.querySelectorAll('.galeria__img');
  var banner = document.querySelector('.galeria__banner');   
  var imgArray= ["./images/corbata.png", "./images/monos.png","./images/panoleta.png","./images/gafas.png","./images/corbatin.png"];
  var botonCarrito = document.querySelector('.encabezado__icono');
  var miCarrito = document.querySelector('.miCarrito');

function recorrerMiniaturas(miniatura,index){

 
  function mostrarImagen(event){

    var img = imgArray[index];
  
    banner.style.backgroundImage = 'url("'+img+'")';
  
  }

  if(index === 0){
    mostrarImagen();
}

  miniatura.addEventListener('click',mostrarImagen);
  
}

miniaturas.forEach(recorrerMiniaturas);


function carritoVista (event){
  miCarrito.style.display="flex";
 //miCarrito.style.justifyContent="flex-end";
  //miCarrito.style.flexDirection ="colum";
  
  
}

botonCarrito.addEventListener("click",carritoVista);



