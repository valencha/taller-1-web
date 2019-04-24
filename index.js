var express= require('express');
var motorRender = require ('express-handlebars');
var app = express();

var fs = require ('fs');
console.log(__dirname);

app.use(express.static('public'));

var productosComida = [];

 productosComida.push( {
  titulo: 'gato',
  precio : '$124313253636',
  imagen: 'http://estaticos.elmundo.es/assets/multimedia/imagenes/2017/02/20/14875913928853.jpg',
  descripcion: 'nwnwnowivnowvnwovw',
  detalle:'sffwfs',
  detalles:'qdqfwf',
  cuidado:'dqdqd',
  cuidados:'dqdqfq',

  });
  

  productosComida.push( {
    titulo: 'perro',
    precio : '$124313253636',
    imagen: 'https://fotografias.antena3.com/clipping/cmsimages01/2017/02/07/364CAAAC-A60E-43BB-8FED-05AA0B8F3AF9/58.jpg',
    descripcion: 'nwnwnowivnowvnwovw',
    detalle:'sffwfs',
    detalles:'qdqfwf',
    cuidado:'dqdqd',
    cuidados:'dqdqfq',
    });


app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');
console.log(productosComida);

 
  app.get('/', function (req, res) {

    res.sendfile('./index.html');
  });

  app.get('/food', function (req, res) {

    var contexto = {
      titulo: 'Productos',
      listaProductos: productosComida,
  };
  res.render('lista-productos', contexto);
  console.log(contexto.listaProductos);
});

  app.get('/food/:producto', function(request, response) {
    var contexto = null;
    productosComida.forEach(function(producto) {
     if (producto.titulo == request.params.producto){
        contexto = producto;
       }
       console.log( request.params.producto);

    });


    if (contexto== null){
    response.send('no encontre'+ request.params.producto);
    }else {
    response.render('producto',contexto);
    }
    });
   
  
  app.listen(5000);