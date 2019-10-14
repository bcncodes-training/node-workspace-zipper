const fs = require('fs')

// let agruparArchivos = (ruta = "./")=>{


//     const leerDirectorio = fs.readdir(ruta, (error, fichero)=>{          /* leerDirectorio */ 
    
//         fichero.forEach(element =>{
//             return array.push(element)
//         })
    
//         fichero.forEach(element => {
//             if (fs.statSync(ruta+element).isDirectory() === true && fichero != "node_modules"){        
           
//         } 
//         });
         
//     })
    
//     leerDirectorio.on("data", ()=>{console.log(data)})

let arrayFicheros = [];

const leerDirectorio = fs.readdir(ruta = "./", (error, fichero)=>{
    
    // process.stdout.write("\n ficheros encontrados: \n \n");

let tipoFichero = fs.statSync(ruta+element).isDirectory()   /* true = directorio // False = fichero */
   

    fichero.forEach(element => {

 switch (fichero, directorio){
    case tipoFichero === false :
    
    case tipoFichero && fichero != "node modules":
    console.log("hola");

    }

    



        process.stdout.write(element + "\n");
        arrayFicheros.push(element)      
    });




})

leerDirectorio
