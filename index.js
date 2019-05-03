var express = require('express');
var motorRender = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;

var assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'tienda';

const client = new MongoClient(url, {useNewUrlParser: true });
var db= null;
client.connect(function(err){
  
  assert.equal(null, err);

  db = client.db(dbName);
  //client.close();

});

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

app.get('/store/:categoria?', function (request, res) {
  var query = {};
  if ( request.params.categoria){
    query.tipo = request.params.categoria;
    //request.params.titulo=query.titulo;
  }
   
  if(request.query.precio){
    query.precio = { $lte: request.query.precio};
  }

  var articulos = db.collection('productos');
  articulos.find(query).toArray(function(err,docs){
    assert.equal(err,null);
    if(request.params.categoria == "food"){
      request.params.categoria = "Food";
     request.params.titulo= query.titulo;
    }

    if(request.params.categoria == "clothing"){
      request.params.categoria = "Clothing";
     request.params.titulo= query.titulo;
    }


    if(request.params.categoria == "toys"){
      request.params.categoria = "Toys";
     request.params.titulo= query.titulo;
    }


    if(request.params.categoria == null){
      request.params.categoria = "All";
     request.params.titulo= query.titulo;
    }
    

    if(request.params.categoria == "forwalks"){
      request.params.categoria = "For Walks";
     request.params.titulo= query.titulo;
    }
    
    var contexto = {
      listaProductos: docs,
      categoria:request.params.categoria,
      titulo: request.params.categoria,
      sonTodos: request.params.categoria= "",
      precio: request.query.precio,
      //titulo: titulo,
      
    };

    

    res.render('lista-productos', contexto);
  });


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