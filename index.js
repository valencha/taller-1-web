var express = require('express');
var motorRender = require('express-handlebars');
var app = express();

var fs = require('fs');

var readFile = fs.readFileSync('listaBase.json');
var productos = JSON.parse(readFile);
var min=0; 
    var max=19;  
    var random = Math.random() * (+max - +min) + +min; 

app.use(express.static('public'));



app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {

  res.sendfile('./index.html');
});

app.get('/store', function (req, res) {
    var contexto = {
      categoria: "All",
      listaProductos: productos,
    };
    res.render('lista-productos', contexto);
});

app.get('/store/:categoria', function (request, res) {

  var arrayProductos = [];
  //var rand = arra[Math.floor(Math.random() * myArray.length)];

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


app.listen(4000);