function paginaCargada(){
    var rango = document.querySelector('.precio');
   
    var rangeBullet = document.getElementById("rs-bullet");

    rango.addEventListener("input", showSliderValue);

        function showSliderValue() {
        rangeBullet.innerHTML = rango.value;
        var bulletPosition = (rango.value /rango.max);
        rangeBullet.style.left = (bulletPosition * 240) + "px";
        }
    
  
    function buscarPorPrecio(){
      console.log(rango.value);
      location.href = '/store?precio='+ rango.value;
    
    }
    if(rango != null){
        rango.addEventListener('change',buscarPorPrecio);
    }
    var listaProductos = [];
    if(localStorage.getItem('listaProductos') != null){
        listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
    }

/*
    var botones = document.querySelectorAll('.producto__boton');

    function recorrerBotones (boton){
        function anadirCarrito(){
            var padre = boton.parentNode;
            var nombre = padre.querySelector('.producto__titulo').innerText;
            var precio = padre.querySelector('.producto__precio').innerText;
            var imagen = padre.querySelector('.producto__imagen').src;
    
            var producto = {
                titulo: nombre,
                precio: precio,
                imagen: imagen,
            }
    
            listaProductos.push(producto);
            localStorage.setItem ('listaProductos',JSON.stringify(producto));
    
        }
        boton.addEventListener('click',anadirCarrito);
    }
    botones.forEach(recorrerBotones);
  
*/


var botonProductoDetalle = document.querySelector('.producto__boton');
function agregarAlCarritoDetalle(){
    var nombre = document.querySelector('.producto__titulo').innerText;
    var precio = document.querySelector('.producto__precio').innerText;
    var imagen = document.querySelector('.producto__imagen').src;
    var producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen,
    };
    
    listaProductos.push(producto);
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
    console.log(listaProductos);
}
if(botonProductoDetalle != null){
    botonProductoDetalle.addEventListener('click', agregarAlCarritoDetalle);
}

var cantidad = document.querySelector('.cantidad__num');
var contador= 1;
var btnmas = document.querySelector('.cantidad__mas');
var btnmenos = document.querySelector('.cantidad__menos');

function sumaCantidad(){
    contador= contador + 1;   
    cantidad.innerHTML = contador;
}
function restaCantidad(){
    contador= contador - 1;  
    if(contador <= 1){
        contador =1;
    } 
    cantidad.innerHTML = contador;
}
if(btnmas != null){
btnmas.addEventListener('click', sumaCantidad);
}
if(btnmenos != null){
    btnmenos.addEventListener('click', restaCantidad);
    }
console.log(contador);
if(cantidad!= null){
    cantidad.innerHTML = contador;
}

}

window.addEventListener('load',paginaCargada);