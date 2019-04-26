var express= require('express');
var motorRender = require ('express-handlebars');
var app = express();

var fs = require ('fs');
console.log(__dirname);

app.use(express.static('public'));

var productosComida = [];

 productosComida.push( {
  titulo: 'Pedigree Food',
  precio : '5.3',
  imagen: '../images/miniatura.png',
  descripcion: 'nwnwnowivnowvnwovw',
  disponible: true,
  detalle:'sffwfs',
  detalles:'qdqfwf',
  cuidado:'dqdqd',
  cuidados:'dqdqfq',
  href:'food',

  });
  

  productosComida.push( {
    titulo: 'NutreCan',
    precio : '15.3',
    imagen: '../images/miniatura.png',
    descripcion: 'nwnwnowivnowvnwovw',
    detalle:'sffwfs',
    detalles:'qdqfwf',
    cuidado:'dqdqd',
    cuidados:'dqdqfq',
    href:'food',
    });

    productosComida.push( {
      titulo: 'DogChow',
      precio : '12.4',
      imagen: '../images/miniatura.png',
      descripcion: 'nwnwnowivnowvnwovw',
      detalle:'sffwfs',
      detalles:'qdqfwf',
      cuidado:'dqdqd',
      cuidados:'dqdqfq',
      disponible: true,
      href:'food',
      });
      productosComida.push( {
        titulo: 'Chunky',
        precio : '12,4',
        imagen: '../images/miniatura.png',
        descripcion: 'nwnwnowivnowvnwovw',
        detalle:'sffwfs',
        detalles:'qdqfwf',
        cuidado:'dqdqd',
        cuidados:'dqdqfq',
        href:'food',
        });
        productosComida.push( {
          titulo: 'RoyalCanin',
          precio : '1.4',
          imagen: '../images/miniatura.png',
          descripcion: 'nwnwnowivnowvnwovw',
          detalle:'sffwfs',
          detalles:'qdqfwf',
          cuidado:'dqdqd',
          cuidados:'dqdqfq',
          disponible: true,
          href:'food',
          });


app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');
console.log(productosComida);

 
  app.get('/', function (req, res) {

    res.sendfile('./index.html');
  });

  app.get('/food', function (req, res) {

    var contexto = {
      categoria: 'Food',
      titulo: 'Food',
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