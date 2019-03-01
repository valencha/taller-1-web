
var seccion = document.querySelector('#section1');

console.log(seccion.getBoundingClientRect()); 

function moverScroll(event) {
  console.log(window.scrollY);
  seccion.getBoundingClientRect();
  


}

window.addEventListener('scroll',moverScroll);



