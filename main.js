const fs = require('fs');
const path = require('path');
const tar = require('tar');

//entra a todos los archivos del directorio, en carpetas y subcarpetas - excluye node_modules
let check = function(dir, done) {
let resultsList = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let i = 0;
    (function next() {
      let file = list[i++];
      if (!file) return done(null, resultsList);
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          check(file, function(err, res) {
            if (path.basename(file) !== ('node_modules')){
              resultsList = resultsList.concat(res);
            } 
            next();
          });
        } else {
          resultsList.push(file);
          tar.create({
            gzip: true,
            file: './myTarFolder.tar'
          },resultsList)
            .then(fs.createReadStream('./myTarFolder.tar'))
            .catch(error => console.log(error.message));
          next();
        }
      });
    })();
  });
};

check('.', function(err, resultsList) {
    if (err) throw err;
    console.log(resultsList);
  });

