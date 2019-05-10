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
       
       location.href = '/store?nuevo='+1; 
            nuevos.checked=true; 
           
      
      }
      if(nuevos!=null){
        nuevos.addEventListener('change', buscarPorNuevo);  
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
    var carritoNum = document.querySelector('.carrito__num');
    var btnEliminar= document.querySelector('.btnLimpiar');
    btnEliminar.addEventListener('click',(function limpiarCarrito() {
        listaProductos.splice(0,listaProductos.length);
        listaProductos.length=0;
        listaCarrito.innerHTML = '';
    }));
    var listaCarrito = document.querySelector('.carrito-desplegado__lista');
    function actualizarCarrito(){
        carritoNum.innerHTML = '('+listaProductos.length+')';
        listaCarrito.innerHTML = '';


        listaProductos.forEach(function(producto,index){
            listaCarrito.innerHTML += `<article class="articulo">
                <div class="imagen">
                <img class="articulo__imagen"src="${producto.imagen}">
                <h1 class="articulo__precio"> <span class="precioColor"> price: </span>  ${producto.precio}</h1>
                </div>
                <div class="texto">
                <div class="icono">
                <img name= "${producto.nombre}"class="articulo__basura"src="/images/basura.png" width=20px>
                </div>
                <h1 class="articulo__titulo">${producto.nombre}</h1>
                <p class="articulo__descripcion">${producto.descripcion}</p>
                <div class="cantidad">   
                <button class="cantidad__menos">-</button>
                <h2 class="cantidad__num">1</h2>
                <button class="cantidad__mas">+</button></div>
                </div>
                </article>`
                
        });
        var eliminar = document.querySelector('.articulo__basura');
        var articulo = document.querySelector('.articulo');
        for (var index = 0; index < listaProductos.length; index++) {
        function eliminarCarrito(){
          
                listaProductos.splice(index,1);
                articulo.remove();
                console.log(listaProductos.length);
                
            }
              
        }
    
    
    eliminar.addEventListener('click',eliminarCarrito);
        console.log(listaProductos);
    }  
    actualizarCarrito();

var botonProductoDetalle = document.querySelector('.producto__boton');
function agregarAlCarritoDetalle(){
    var nombre = document.querySelector('.producto__titulo').innerText;
    var precio = document.querySelector('.producto__precio').innerText;
    var imagen = document.querySelector('.producto__imagen2').src;
    var descripcion= document.querySelector('.producto__descripcion').innerText;
    var producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        descripcion: descripcion
    };
    
    listaProductos.push(producto);


    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
 
}
if(botonProductoDetalle != null){
    botonProductoDetalle.addEventListener('click', agregarAlCarritoDetalle);
}



}  

window.addEventListener('load',paginaCargada);
var cantidad = document.querySelector('.cantidad__num');
var contador= 1;
var btnmas = document.querySelector('.cantidad__mas');
var btnmenos = document.querySelector('.cantidad__menos');

function sumaCantidad(){
    contador= contador + 1; 
    console.log("sumo");  
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