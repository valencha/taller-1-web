 
  var miniaturas = document.querySelectorAll('.galeria__img');

  var banner = document.querySelector('.galeria__banner');   
    var imgArray= ["./images/corbata.png", "./images/monos.png","./images/panoleta.png","./images/gafas.png","./images/corbatin.png"];
    var imageIndex= 0;

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




