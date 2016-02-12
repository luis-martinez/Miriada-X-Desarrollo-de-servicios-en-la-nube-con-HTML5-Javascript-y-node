/*
Realizar en JavaScript un programa, de nombre “merge”, que integre n ficheros en uno solo.

El programa se debe invocar de la siguiente forma

node merge.js <dest> <f1> <f2> .. <fn>

El programa debe crear un fichero <dest> concatenando los contenidos de <f1> a <fn>, siendo n un número variable de ficheros.
*/

var fs = require('fs');

// Comprueba si tiene al menos un fichero origen y uno de destino
//  sino sale del programa
if (process.argv.length < 4) {
    console.log('Syntax: "node merge.js <dest> <f1> <f2> <f3> ... <fn>"');
    process.exit();
}

// Fichero de destino
var dest = process.argv[2];

// Añade cada uno de los ficheros al fichero destino
for (var i = 3; i < process.argv.length ; i++) {
    fs.readFile(process.argv[i], function (err, data){
        if (err) throw err;
        fs.appendFile(dest, data, function (err){
            if (err) throw err;
            console.log('The file was appended to', dest);
        });
    });
}
