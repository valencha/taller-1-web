function paginaCargada(){
  
    var rango = document.querySelector('.rs-range');
   var todos = document.querySelector('.all__boton');
   var nuevos= document.querySelector('.new__boton');
   var productoNuevo= document.querySelector('.producto__nuevo');
    var rangeBullet = document.getElementById("rs-bullet");
    var inputPrecio = document.querySelector('.input-precio')
    var inputDescuento = document.querySelector('.code');
    var sub = document.querySelector('.sub');
    var dis = document.querySelector('.dis');
    var to = document.querySelector('.to');
  
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
  
    var subtotalNum = document.querySelector('.subtotal__num');
    var totalNum = document.querySelector('.total__num');
    var noProductos= document.querySelector('.numP__total');
    var btnEliminar= document.querySelector('.btnLimpiar');

    btnEliminar.addEventListener('click', limpiarCarrito);

    function limpiarCarrito() {
        listaProductos = [];
        listaCarrito.innerHTML = '';
        localStorage.removeItem('listaProductos');

        window.location.reload(true);
                    
        localStorage.setItem('listaProductos', JSON.stringify(listaProductos)); 
    };

    var listaCarrito = document.querySelector('.carrito-desplegado__lista');

    function actualizarCarrito(){
        var suma = 0;
        carritoNum.innerHTML =listaProductos.length;

        noProductos.innerHTML = listaProductos.length;
        listaCarrito.innerHTML = '';


        listaProductos.forEach(function(producto){
            listaCarrito.innerHTML += `<article class="articulo">
                <div class="imagen">
                <img class="articulo__imagen"src="${producto.imagen}">
                <h1 class="articulo__precio"> <span class="precioColor"> price: </span>${producto.precio} </h1>
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
                </article>`;
                console.log(producto.precio);
                var temp = new String();
                for (let i = 1; i < producto.precio.length; i++) {
                    temp += producto.precio[i];
                }
                
                suma += parseInt(temp);
                if (subtotalNum != null) {
                    subtotalNum.innerHTML = "$" + suma;
                }

                var delivery=9;
                var sumaTotal=suma;
                sumaTotal+=delivery;
                if (totalNum != null) {
                
                    totalNum.innerHTML = "$" + sumaTotal;
                    if (sub != null) {
                    sub.innerHTML = "$" + sumaTotal;
                }
                }
   
                if(inputDescuento!=null){   
                inputDescuento.addEventListener('change', function(){

                    if(inputDescuento.value=='CANS1'){
                      var des= sumaTotal*0.2;
                      var entero = parseInt(des);
                      dis.innerHTML = "20%";
                        inputPrecio.value = sumaTotal-entero;
                        var total = sumaTotal-entero;
                        to.innerHTML= " $"+total;
 
                    }

                    if(inputDescuento.value=='CANS2'){
                        var des= sumaTotal*0.5;
                        var entero = parseInt(des);
                        dis.innerHTML = "50%";
                          inputPrecio.value = sumaTotal-entero;
                          var total = sumaTotal-entero;
                          to.innerHTML= " $"+total;
                      }
                });
            }

            });

            var eliminarProducto = document.querySelectorAll('.articulo__basura');
            for (let i = 0; i < eliminarProducto.length; i++) {
                eliminarProducto[i].addEventListener('click', (function eliminarCarrito(){
          
                    listaProductos.splice(i, 1);

                    window.location.reload(true);
                    
                    localStorage.setItem('listaProductos', JSON.stringify(listaProductos)); 
                }));
            
            
            
              
        }
    
    
      
    }  

    actualizarCarrito();


    var botones = document.querySelectorAll('.btn__agregar');

    function recorrerBotones(boton){

     
        function agregarAlCarrito(){
            var padre = this.parentNode;
            var nombre = padre.querySelector('.producto__titulo').innerText;
           var precio = padre.querySelector('.producto__precio').innerText;
           var imagen = padre.querySelector('.producto__img').src;
          var descripcion= padre.querySelector('.producto__descripcion').innerText;
            var producto = {
                nombre: nombre,
                precio: precio,
                imagen: imagen,
               descripcion: descripcion,




               
            };

       
             console.log(precio);
            
            listaProductos.push(producto);
            localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
            actualizarCarrito();     
            //window.location.reload(true);
        }
        function moverImg() {
            var box = document.querySelectorAll(".imgCarrito");
          
            tl.to(box, 0.5, {rotation:360, ease: Bounce.easeOut});
          
          }
        boton.addEventListener('click', agregarAlCarrito);
        boton.addEventListener('click', moverImg);
    }
    if(botones != null){
        botones.forEach(recorrerBotones);
    }


var botonProductoDetalle = document.querySelector('.producto__boton');

var botonPeque= document.querySelector('.producto__boton-peque');

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
    
    window.location.reload(true);
}

if(botonProductoDetalle != null){
    botonProductoDetalle.addEventListener('click', agregarAlCarritoDetalle);

}
if(botonPeque != null){
botonPeque.addEventListener('click', agregarAlCarritoDetalle);
}

}  

window.addEventListener('load',paginaCargada);

var cantidad = document.querySelector('.cantidad__num');
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
