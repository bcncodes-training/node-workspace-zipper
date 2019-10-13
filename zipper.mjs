/*Tareas

Crea un módulo (preferiblemente MJS) que haga las siguientes tareas:

Recorre el árbol de directorios
Si encuentra un archivo lo añade a un array de ficheros para comprimir.
Si encuentra un directorio comprueba que no sea el directorio node_modules.
Si lo es busca el siguiente elemento dentro del árbol
Si no es node_modules lee los elementos del directorio, los añade al array.
El proceso se ejecuta recursivamente hasta que no queda ningún elemento por leer dentro del directorio.
Una vez completadas las tareas se comprime el fichero tar a tar.gz.
Ejemplo:

Input

workspace
|-- ejercicio1
    |-- node_modules
    |-- images
        |-- imagen1.jpg
    |-- main.js
    |-- package.json
*/

import fs from 'fs';
import tar from 'tar';
import zlib from 'zlib';

//Ruta total : ruta = process.cwd();
//Ruta del WorkSpace
let ruta = '../';
let ficheros = [];

let getFiles = function(ruta, ficheros){
    
    fs.readdirSync(ruta).forEach(function(archivo){

    if (archivo!=="node_modules"){
        
            var subruta = ruta + '/' + archivo;
        //lstatSync
        //if((fs.statSync(subruta).isDirectory())&&(archivo!=="node_modules")){
        if(fs.statSync(subruta).isDirectory()){
            //console.log('*: '+path+'\n\n\r');
            getFiles(subruta, ficheros);
        } else {
            ficheros.push(ruta + '/' + archivo);

            
                tar.create(
                {
                    gzip: false,
                    file: 'my-workSpace.tar'
                },
                ficheros
                //['some', 'files', 'and', 'folders'] -->array de archivos con ruta
                )//.then(_ => { .. tarball has been created .. })
                .then(fs.createWriteStream('my-workSpace.tar'))
                .catch(error => console.log(error.message));

           //     tar.x(options, fileList, callback) [alias: tar.extract]
           //     Extract a tarball archive.
           
           fs.createReadStream('my-workSpace.tar')
            .pipe(zlib.createGzip())
            .pipe(fs.createWriteStream('ws.gz'));
            console.log("Archivo Comprimido: "+ruta + '/' + archivo); 
            /**/
        }
    } else {console.log(`Not attached: Current directory: ${archivo} in ${ruta}`);}
    });     
};

getFiles(ruta, ficheros);
//console.log(ficheros);// will log all files in directory

/* COMPRESION Gz de un workspace.tar * /
fs.createReadStream('./workspace.tar')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('workspace.tar.gz'));
console.log("WorkSpace Compressed.");
*/
