import { promises as fs} from 'fs';

export default class {
    async getSchemaFiles(folder,exclude) {
        try {
            const files = (await fs.readdir(folder)) || [];
            return files
                .map(file => `${folder}/${file}`)
                .filter(file => !file.endsWith(exclude))
                .filter(async file =>{ !(await fs.stat(file)).isFile()})
                
        } catch (err) {
            console.log(err.message)
        }
    }
}

// revisar filtre isFile()...
// amb process.argv[2] agafariem el primer parametre passat com 'node --experimental-modules index.mjs 'directory_path''