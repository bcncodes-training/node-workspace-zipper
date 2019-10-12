/*
Ejercicio 7
Recorrer un directorio manejando la respuesta de si es un fichero o un directorio con promesas.

Si es un fichero concatenar el nombre del fichero al directorio
Si es un directorio volver a invocar a la función.
Obtener el resultado por consola.
*/
import fs from 'fs';
import zlib from 'zlib';

const filDir = fs.statSync('./zipper.mjs');
//Archivo o Directorio
const lDir = fs.readdirSync('../');

//readFileSync(ruta, options);

//Archivo? Si archivo y ! no_modules - comprime o Array 
console.log(filDir.isFile());

//Leer archivos o Directorios en Workspace
console.log(lDir);

/* COMPRESION Gz */
fs.createReadStream('./zipper.mjs')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('zipper.mjs.gz'));
console.log("File Compressed.");