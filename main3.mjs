import fs from 'fs';


const streamLectura = fs.createReadStream(
    ()=>{
     fs.readdirSync("./")
    })
    
    

streamLectura.on('data', (data)=>{
    console.log(data.length)
})