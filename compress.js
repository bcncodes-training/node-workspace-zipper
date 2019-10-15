const fs = require('fs');
const zlib = require('zlib');

//comprimir & descomprimir
let filename = './myTarFolder.tar'; //Comprime el archivo .tar
//let filename = './myTarFolder.tar.gz'; //Descomprime el archivo .gz dejandolo en un .tar
let compress = zlib.createGzip();
let decompress = zlib.createGunzip();
let readstream = fs.createReadStream(filename);

function compressfile(filename){
  let newfilename = filename+'.gz';
  let writestream = fs.createWriteStream(newfilename);

    readstream.pipe(compress).pipe(writestream);
  
  }

function decompressfile(filename){
  let newfilename = filename.replace('.gz','');
  let writestream = fs.createWriteStream(newfilename);
    
    readstream.pipe(decompress).pipe(writestream);
    
}

if(/.gz$/i.test(filename)==true){
    decompressfile(filename)
}
else {
    compressfile(filename);
}
