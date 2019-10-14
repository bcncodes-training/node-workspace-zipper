import fs from 'fs';
import tar from 'tar';

/**
 * 
 */
export default class NodeZip7 {
    
    /**
     * Constructor
     * 
     * @param path Ruta amb la que treballarà el programa
     * @param excluir Noms de fitxers/directoris a excluir
     */
    constructor(path = './',  excluir = ['node_modules']) {
        this.excluits = excluir;
        this.path = path;
        this.extensio = 'nz7'
    }

    /**
     * Canvia el valor de la ruta.
     * 
     * @param newPath Retorna una nova ruta 
     */
    setPath(newPath) {
        this.path = newPath;
        return this;
    }

    /**
     * Crea un fitxer comprimir amb les dades del directori.
     */
    comprimirDirectori(nomComprimit = this.path) {
        // Crear json
        fs.writeFile(`${nomComprimit}.json`, 
                JSON.stringify(this.obtenirArbreFS()), {}, 
                err => { if (err) throw err });

        tar.create({
            gzip: true,
            file: `${nomComprimit}.nz7`,
        },[`${nomComprimit}.json`]).then(() => {
            
            console.log("Directori creat");
        });
        
        fs.unlink(`${nomComprimit}.json`, err => {
            if (err) throw err
        });

        return true;
    }

    
    /**
     * Crea l'estructura de fitxers a partir d'un fitxer comprimit.
     */
    descomprimirDirectori(fitxerComprimit, rutaDescomprimit = this.path) {
        
        tar.extract({
            file: `${fitxerComprimit}.${this.extensio}`,
        }.then(() => {
            // Crear estructura directoris
            this.crearFitxer($)
        }));
        
        fs.unlink(`${nomComprimit}.json`, err => {
            if (err) throw err
        });

        return true;
    }

    /**
     * Crea un arbre amb l'estructura de directoris al sistema de fitxers d'una ruta donada
     * 
     * @param {number} nivell Nivell actual. Per defecte agafa l'atribut path del objecte.
     * @return Un array amb l'estructura dels directoris. 
     */
    obtenirArbreFS(path = this.path, nivell = 1) {
        let arbre = [];
        let files;
        files = this.obtenirFitxers(path);
    
        for (let nomFitxer of files) {
            let filePath = path + (path.endsWith('/') ? '' : '/') + nomFitxer;
            if (this.excluits.includes(nomFitxer)) continue;
            // Objecte a introduir al json
            let nFile = {
                path: nomFitxer,
            }
            // Comprobar si es directorio o no
            if (this.esDirectori(filePath)) {
                nFile.type = 'D';
                nFile.data = this.obtenirArbreFS(filePath, nivell + 1);
            } else {
                nFile.type = 'F';
                nFile.data = this.contingutFitxer(filePath);
            }
    
            arbre.push(nFile);
        }
    
        return arbre;
    }

        
    /**
     * Obté els continguts d'un fitxer
     * 
     * @param fitxer Ruta del fitxer
     */
    contingutFitxer(fitxer) {
        let contingut = fs.readFileSync(fitxer);
        return contingut;
    }

    /**
     * Obté els noms dels fitxers d'una ruta donada.
     * 
     * @param ruta
     * @return Array amb una llista de directoris al path donat
     */
    obtenirFitxers(ruta = this.path) {
        return fs.readdirSync(ruta)
    }

    /**
     * Determina si un fitxer és un directori o no.
     * 
     * @param nomFitxer Nom del fitxer a comprovar.
     * @return True si el fitxer és un directori. Altrament, false.
     */
    esDirectori(nomFitxer) {
        return fs.statSync(nomFitxer).isDirectory();
    }

    crearFitxer(nomFitxer, contingut) {
        fs.writeFile(nomFitxer, contingut, {}, 
                err => { if (err) return false });
        return true;
    }


}