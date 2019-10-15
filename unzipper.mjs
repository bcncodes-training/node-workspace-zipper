// Bonus : Descomprimir
//     tar.x(options, fileList, callback) [alias: tar.extract]
//     Extract a tarball archive.
    //import tar from 'tar';

    import fs from 'fs';
    import tar from 'tar-fs';
    
    
    try { fs.createReadStream('../../my-workSpace.tar')
      .pipe(tar.extract('../../my-workSpace')) } 
      
      catch(error) { console.log(error.message)}
    
      console.log("WorkSpace Uncompressed.");
        