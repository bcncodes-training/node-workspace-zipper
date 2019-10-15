import fs from 'fs';
import tarStream from 'tar-stream';


export default class {

    importDir = './';
    exportDir = './';
    extension = '.tar';
    bufferSize = 100;

    constructor() { }
    
    setImportDirectory(dir) {
        this.importDir = dir;
        return this;
    }
    
    setExportDirectory(dir) {
        this.exportDir = dir;
        return this;
    }
    
    async compressImportDirectory(compressedName) {
        let pack = tarStream.pack();
        fs.readdir(this.importDir, (err, files) => {
            files.forEach(fileName => {
                let entry = pack.entry({ 
                        name: `${compressedName}${this.extension}`, 
                        size: this.bufferSize 
                }, err => {
                    if (err) {
                        console.error(`ERROR COMPRESSING ${fileName}: ${err}`);
                    } else {
                        console.log(`COMPRESSION DONE: ${fileName}`);
                    }
                    pack.finalize();
                });
                fs.createReadStream(fileName).pipe(entry);
            });
        });
    }

}