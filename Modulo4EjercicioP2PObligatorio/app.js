var express = require('express'),
    app     = express();


app.get('/preguntas', function(req, res){
    console.log('Preguntas');
    res.send('<!DOCTYPE html>'
            +'  <html>'
            +'  <head lang="en">'
            +'      <meta charset="UTF-8">'
            +'      <title>Preguntas</title>'
            +'  </head>'
            +'  <body>'
            +'      <form method="get" action="/respuesta">'
            +'          <input type="hidden" name="pregunta" value="1"/><br>'
            +'          ¿Quién descubrió América?<br>'
            +'          <input type="text" name="respuesta" placeholder="Su respuesta"/>'
            +'          <input type="submit" value="Enviar" />'
            +'      </form>'
            +'      <br>'
            +'      <form method="get" action="/respuesta">'
            +'          <input type="hidden" name="pregunta" value="2"/><br>'
            +'          ¿Capital de Portugal?<br>'
            +'          <input type="text" name="respuesta" placeholder="Su respuesta"/>'
            +'          <input type="submit" value="Enviar" />'
            +'      </form>'
            +'  </body>'
            +'  </html>'
              );
});


app.get('/respuesta', function(req, res){
    var volver = '<br> <a href="/preguntas"> Volver</a>';
    if (req.query.pregunta === '1'){
        console.log('Pregunta 1');
        if ( (req.query.respuesta === 'Cristobal Colón')
              || (req.query.respuesta === 'Cristobal Colon')){
            res.send('Respuesta correcta' + volver);
        } else {
            res.send('Incorrecto, la respuesta correcta es: Cristobal Colón' + volver);
        }
    } else {
        console.log('pregunta 2');
        if ( req.query.respuesta === 'Lisboa'){
            res.send('Respuesta correcta' + volver);
        } else {
            res.send('Incorrecto, la respuesta correcta es: Lisboa' + volver);
        }
    }

});


app.get('*', function(req, res){
      res.status(404).send('ERROR 404 Not Found. <br> Prueba con <a href="/preguntas">Ir a preguntas</a>').end();
      console.log('ERROR 404 Not Found');
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
