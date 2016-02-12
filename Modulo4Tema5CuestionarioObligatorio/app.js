var express = require('express');
var app = express();
app.get('/coche', function (req, res){res.send( 'Coche' );});
app.get('/casa/*', function (req, res){res.send( 'Casa' );});
app.get('*', function (req, res){res.send( 'Nada' );});
app.listen(8080);

