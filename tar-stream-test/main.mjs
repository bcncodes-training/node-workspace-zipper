import TarImp from './tar-imp.mjs';

let tar = new TarImp();

tar.setImportDirectory('./data/')
    .setExportDirectory('./export/')
    .compressImportDirectory('compressed');