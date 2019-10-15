import util from 'util';
// import { resolve } from 'path';
import fs from 'fs';
import tar from 'tar';
import path from 'path'

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);


async function getFiles(dir) {

    const subdirs = await readdir(dir);
    var i = subdirs.indexOf("node_modules");
    subdirs.splice(i, 1);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = path.resolve(dir, subdir);
        return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

const zip = (dir) => {
 
     getFiles(dir)
        .then(files => {
             tar.c( 
                {
                    gzip: true
                },
                files
            ).pipe(fs.createWriteStream("workspace.tgz"))
            console.log('Fichero comprimido')
        })
        .catch(err => console.error("Error: " +err));
}

const unzip = () => {
    tar.x( 
        {
            file: "workspace.tgz"
        },
    ).then(() => { console.log(`Fichero descomprimido`) })
        .catch(err => console.log("Error: " + err))
}

export {
    zip,
    unzip
}