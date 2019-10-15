import { promises as fs} from 'fs';

export default class {
    async getSchemaFiles(folder) {
        try {
            const files = (await fs.readdir(folder)) || [];
            return files
                .map(file => `${folder}/${file}`)
                .filter(async file => (await fs.stat(file)).isFile())
        } catch (err) {
            console.log(err.message)
        }
    }
}

// podem afegir i passar un altre parametre amb els excludes i fer un '.filter' per filtrar els directoris

// amb process.argv[2] agafariem el primer parametre passat com 'node --experimental-modules index.mjs 'directory_path''