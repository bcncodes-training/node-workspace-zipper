import NodeZip7 from './node-zip.mjs';

const zip = new NodeZip7('./');

// Crear comprimido de directori1 como d1.nz7
console.log(zip.setPath('directori1').comprimirDirectori('d1'));

// Descomprimir d1 en directorio2
zip.setPath("./").descomprimirDirectori('directorio2');