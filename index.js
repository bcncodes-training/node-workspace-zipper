const fs = require('fs');
const EventEmmiter = require('events');

class Descompresor extends EventEmmiter {
    constructor(ruta = "./"){
        this.ruta = ruta;
        this.ficheros = [];
    }

    leerDirectorio(ruta){
        fs.readdirSync(ruta, (error, fichero)=>{
            this.ficheros = fichero;
        })
    }

    leerSubdirectorios(ruta){

    }

    comprobarStats(fichero){
        if (fs.statSync("/"+fichero).isDirectory() === true && fichero != "node_modules"){        
            leerSubdirectorios();
                } 
    }

    agruparArchivos(archivo){
        
    }


}

const descompresor = new Descompresor();

descompresor.leerDirectorio()



// let ruta = '../';
// let stat;
// let direcc;
// let arrayResultado = [];
// let arrayDefinitivo=[];
// let temp;
// function lectura(elementoRuta){
//    direcc = fs.readdirSync(elementoRuta);
//    direcc.forEach(element => {
//        stat = fs.statSync(elementoRuta+element);
//        temp=elementoRuta+element;
//        if (element!="node_modules") arrayResultado.push({direccion:temp, valor: stat.isDirectory()}
//    );
// });
// }
// function subir(e){
//    e.forEach(element=>{
//        if(element.valor){
// /*             arrayResultado.forEach(elemento2=>{
//                if(elemento2.direccion==element.direccion){
//                    elemento2.valor=false;
//                }
//            }) */
//            lectura(element.direccion+"/");
//        };
//    })
// /*     arrayResultado.forEach(element3=>{
//        if(element3.value==true){
//            subir(arrayResultado);
//        }
//    }) */
// }
// function empaquetar(arrayEmpaquetar){
//    arrayEmpaquetar.forEach(element => {
//        arrayDefinitivo.push(element.direccion);
//    });
//    tar.create(
//        {
//          gzip: true,
//          noDirRecurse: true,
//          file: 'destino.tar'
//        },
//        arrayDefinitivo
//      )
// }
// lectura(ruta);
// subir(arrayResultado);
// empaquetar(arrayResultado);