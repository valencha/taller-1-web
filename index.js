var express = require('express');
var motorRender = require('express-handlebars');
var app = express();

var fs = require('fs');
console.log(__dirname);

app.use(express.static('public'));

var productos = [];

productos.push({
  titulo: 'Pedigree Food',
  precio: '5,3',
  imagen: '../images/miniatura.png',
  descripcion: 'nwnwnowivnowvnwovw',
  disponible: true,
  detalle: 'sffwfs',
  detalles: 'qdqfwf',
  cuidado: 'dqdqd',
  cuidados: 'dqdqfq',
  tipo: 'food',
  id: 0

});


productos.push({
  titulo: 'NutreCan',
  precio: '15,3',
  imagen: '../images/miniatura.png',
  descripcion: 'nwnwnowivnowvnwovw',
  detalle: 'sffwfs',
  detalles: 'qdqfwf',
  cuidado: 'dqdqd',
  cuidados: 'dqdqfq',
  tipo: 'food',
  id: 1
});

productos.push({
  titulo: 'DogChow',
  precio: '12,4',
  imagen: '../images/miniatura.png',
  descripcion: 'nwnwnowivnowvnwovw',
  detalle: 'sffwfs',
  detalles: 'qdqfwf',
  cuidado: 'dqdqd',
  cuidados: 'dqdqfq',
  disponible: true,
  tipo: 'food',
  id: 2
});
productos.push({
  titulo: 'Chunky',
  precio: '12,4',
  imagen: '../images/miniatura.png',
  descripcion: 'nwnwnowivnowvnwovw',
  detalle: 'sffwfs',
  detalles: 'qdqfwf',
  cuidado: 'dqdqd',
  cuidados: 'dqdqfq',
  tipo: 'food',
  id: 3
});
productos.push({
  titulo: 'RoyalCanin',
  precio: '1,4',
  imagen: '../images/miniatura.png',
  descripcion: 'nwnwnowivnowvnwovw',
  detalle: 'sffwfs',
  detalles: 'qdqfwf',
  cuidado: 'dqdqd',
  cuidados: 'dqdqfq',
  disponible: true,
  tipo: 'food',
  id: 4
});


app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {

  res.sendfile('./index.html');
});

app.get('/store/:categoria', function (request, res) {

  var arrayProductos = [];

  productos.forEach(function (producto) {
    if (producto.tipo == request.params.categoria) {
      arrayProductos.push(producto);
    }
    

  });



  var contexto = {
    categoria: request.params.categoria,
    listaProductos: arrayProductos,
  };


  res.render('lista-productos', contexto);
  console.log(contexto.listaProductos);
});

app.get('/producto/:id', function (request, response) {
  var contexto = null;
  productos.forEach(function (producto) {
    if (producto.id == request.params.id) {
      contexto = producto;
    }
  

  });


  if (contexto == null) {
    response.send('no encontre' + request.params.producto);
  } else {
    response.render('producto', contexto);
  }
});


app.listen(5000);