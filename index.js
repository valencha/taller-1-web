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

MongoClient.connect(`mongodb+srv://cluster0-d3a7t.mongodb.net/tienda`,

{
auth: {

  user: 'isabellajordan',
  password: 'ValenIsa2019-1'
}



},

function(err,client){

  if(err) throw err;
  db= client.db('tienda');

  app.listen(process.env.PORT || 1234);

}


);

app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));




app.get('/', function (req, res) {

  res.sendfile('./index.html');
 
});


app.get('/game', function (req, res) {

  res.render('game');
 
});

app.get('/store/:categoria?', function (request, res) {
  var query = {};
  if ( request.params.categoria){
    query.tipo = request.params.categoria;
    //request.params.titulo=query.titulo;
  }
   
  if(request.query.precio){
    query.precio = { $lte: parseInt(request.query.precio)};
  }
 
  if(request.query.nuevo){
    query.nuevo = { $lte: parseInt(request.query.nuevo)};
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
      nuevo: request.query.nuevo=="1",
      sonTodos: request.params.categoria== "All",
      precio: request.query.precio|5,
      //titulo: titulo,
      
    };
    console.log(contexto, request.query);


    

    res.render('lista-productos', contexto);
  });


});

app.get('/store/producto/:id', function (request, response) {
  
  var collection = db.collection('productos');
  collection.find({ id: request.params.id})
      .toArray(function(err, docs){
          console.log(docs);
          var contexto = {
              producto: docs[0]
          };
          response.render('producto', contexto);
      });

  });
  app.get('/checkout', function (request, response) {
    console.log(request.body);

    
    var contexto = {
      titulo: 'Check Out',
     
  };
 
            response.render('check');
            
  
    });

    app.post('/pago', function(request, response){
      var pedido = {
          nombre: request.body.nombre,
          id: request.body.id,
          email: request.body.em,
          ciudad: request.body.city,
          dir: request.body.address,
          tar: request.body.nocard,
          idholder: request.body.idholder,
          code: request.body.code,
          productos: JSON.parse(request.body.productos),
          fecha: new Date(),
          estado: 'nuevo',
          precio: request.body.precio,
      };
  
      var collection = db.collection('pedidos');
      collection.insertOne(pedido, function(err){
          assert.equal(err, null);
  
          console.log('pedido guardado');
      });
    response.redirect('/');
  });
  
app.listen(3000);