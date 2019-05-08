function paginaCargada(){
    var rango = document.querySelector('.rs-range');
   var todos = document.querySelector('.all__boton');
   var nuevos= document.querySelector('.new__boton');
   var productoNuevo= document.querySelector('.producto__nuevo');
    var rangeBullet = document.getElementById("rs-bullet");

    function buscarPorPrecio(){
        console.log(rango.value);
        location.href = '/store?precio='+ rango.value;
      
      }
      function buscarPorNuevo(){
      
        location.href = '/store?nuevo=';
      
      }
      if(nuevos!=null){
        nuevos.addEventListener('input', buscarPorNuevo);   
      }
   


        function showSliderValue() {
        rangeBullet.innerHTML = rango.value;
   
        }
     
   
    if(rango != null){
        rango.addEventListener("change",buscarPorPrecio);
        rango.addEventListener('change', showSliderValue);
    }




    var listaProductos = [];
    if(localStorage.getItem('listaProductos') != null){
        listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
    }

    var listaCarrito = document.querySelector('.carrito-desplegado__lista');
    function actualizarCarrito(){
        
        listaCarrito.innerHTML = '';
        listaProductos.forEach(function(producto){
            listaCarrito.innerHTML += '<img src="' + producto.imagen + '" width="100">' + producto.titulo;
        });
    }  
    actualizarCarrito();

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