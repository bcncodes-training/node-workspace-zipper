import fs from 'fs';
// import tar from 'tar';
// import zlib from 'zlib'; 


let stat;
let direcc;
let arrayResultado = [{}];
let arrayTemp = [];



function lectura(){
let test
let ruta ="./"
let array = []
    test = fs.readdirSync("./");
    // console.log(test)
    // test.forEach(element => {console.log(element)})
        
    let recursiva = (ruta)=>{

        fs.readdirSync(ruta).forEach(element => {
                
        if (fs.statSync(element).isDirectory() === false){
            array.push(ruta+element)
        }

        ()=>{
             if (fs.statSync(element).isDirectory() === true && element != "node_modules"){
                (param = "./")=>{
                    ruta = param + element
                }
                recursiva ()
                // ruta = "./" + element + "/";
            
                // console.log("if TRUE RUTA:" + "./" + element + "/")
                // console.log("if true valor archivo: " + fs.readdirSync(ruta+element))
        }
        }
       
    })      
    ;
    }
    recursiva(ruta)

console.log(array)

}


lectura();

//     let ruta;
//     direcc = fs.readdirSync(ruta);
//     direcc.forEach(element => {
//         stat = fs.statSync(ruta+element);




//         //console.log(element + '    ' + stat.isDirectory())
//         arrayResultado.push({direccion:element, valor: stat.isDirectory()}
//         );
//     }); 
// }

// arrayResultado.forEach(element => {
//     if (element.valor && element.direccion != "node_modules"){
//         console.log(element)
// }else{

// }
// });    



