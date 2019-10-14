import fs from 'fs';
import path from 'path';
import tar from 'tar';
let compress = []
let isdir = (dir) => {
  let dirZip = './temp'
  if (!fs.existsSync(dirZip)) {
    fs.mkdirSync(dirZip);
  }
  fs.readdir(dir, (err, list) => {
    if (list) {
      list.forEach(file => {
        file = path.resolve(dir, file);
        fs.stat(file, (err, stat) => {
          if (stat.isDirectory()) {
            if (path.basename(file) !== ('node_modules')) {
              isdir(file);
            }
          } else {
            compress.push(file);
            tarFile(compress);
          }
        });
      });
    }
  });
}
function tarFile(filename) {
  tar.u(
    {
      //gzip: true,
      file: 'my-tarball.tar.gz'
    },
    filename
  ).then(_ => { console.log('tarball has been created ..') });
}


isdir("./");
