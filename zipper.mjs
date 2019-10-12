/*
Ejercicio 7
Recorrer un directorio manejando la respuesta de si es un fichero o un directorio con promesas.

Si es un fichero concatenar el nombre del fichero al directorio
Si es un directorio volver a invocar a la función.
Obtener el resultado por consola.
*/
import fs from 'fs';
import tar from 'tar';
import zlib from 'zlib';

const filDir = fs.statSync('./zipper.mjs');
//Archivo o Directorio
const lDir = fs.readdirSync('../');

//readFileSync(ruta, options);

//Archivo? Si archivo y ! no_modules - comprime o Array 

console.log(filDir.isFile());

//Leer archivos o Directorios en Workspace
console.log(lDir);

// Funcion recursiva  - ForEach que vuelva a repetirse de 
//detetar directorio - recoger array de archivos - rutas --> tar 

/* 
tar.create(
  {
    gzip: <true|gzip options>,
    file: 'my-tarball.tgz'
  },
  ['some', 'files', 'and', 'folders']-->array de archivos con ruta
)//.then(_ => { .. tarball has been created .. })
.pipe(fs.createWriteStream('my-tarball.tgz'))

tar.x(options, fileList, callback) [alias: tar.extract]
Extract a tarball archive.

The fileList is an array of paths to extract from the tarball. If no paths are provided, then all the entries are extracted.

If the archive is gzipped, then tar will detect this and unzip it.


/* COMPRESION Gz de un archivo * /
fs.createReadStream('./zipper.mjs')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('zipper.mjs.gz'));
console.log("File Compressed."); */

/* COMPRESION Gz de un workspace.tar */
fs.createReadStream('./workspace.tar')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('workspace.tar.gz'));
console.log("WorkSpace Compressed.");
