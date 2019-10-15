import Zipper from './zipper.mjs';

const zipper = new Zipper();

zipper.getSchemaFiles('./').then(files=> files.forEach(e => console.log(e)))
                           .catch(e => console.log(e));