import Zipper from './zipper.mjs';

const zipper = new Zipper();

zipper.getSchemaFiles('./','node_modules').then(files=> files.forEach(e => console.log(`element: ${e}`)))
                           .catch(e => console.log(e));