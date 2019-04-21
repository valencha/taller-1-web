var express = require('express');
var motorRender = require ('express-handlebars');
var app = express();

var fs = require ('fs');

app.use(express.static('public'));


app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  });