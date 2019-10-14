import zlib from 'zlib';
import {resolve} from 'path';
import fs from 'fs';
import util from 'util';
import tar from 'tar';


// convertirlas en promesas
const readdir = util.promisify(fs.readdir);
const lstat = util.promisify(fs.lstat);



async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory() && dirent.name != "node_modules") {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const comprimirAll= async (direccion,salida) => {

    let direcciones= [];

    for await (const f of getFiles(direccion)) {
      // los \nodes_modules no tratarlos
        const stat = await lstat(f);
        if(stat.isFile()){
            // console.log(f);
            direcciones.push(f);
        }
    }
    comprimirTar(direcciones,salida);
    console.log(`${direccion} has been compressed succesful in ${salida}`);
  }

  const comprimirTar=(direcciones, salida)=>{
  tar.c( 
    {
      gzip: true    
    },
    direcciones
  ).pipe(fs.createWriteStream(salida));
  }

const descomprimir= (direccion)=>{
  tar.x(  // or tar.extract(
    {
      file: direccion
    }
  ).then(()=> {console.log(`${direccion} has been dumped in cwd`); })
  
}

const comprimir = (fitxer)=>{
  let fitxerCompres = fitxer+'.gz';
    fs.createReadStream(fitxer)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(fitxerCompres))
  .on("end",()=>{console.log("File Compressed.")});
}

// comprimirAll('C:\\Users\\Joaquin\\Documents\\Node2','my-tarball.tgz');

// descomprimir("my-tarball.tgz");

export {comprimirAll,descomprimir};