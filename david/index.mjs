import fs from 'fs';

/**
 * Fitxers excluits
 */
const excluits = [
    'node_modules'
];

/**
 * Crea un arbre amb l'estructura de directoris al sistema de fitxers d'una ruta donada
 * 
 * @param {string} path Ruta que volem recorrer.
 * @param {number} nivell Nivell actual
 * @return Un array amb l'estructura dels directoris. 
 */
function recorrerArbreFS(path, nivell = 1) {
    let arbre = [];
    let files;
    files = obtenirFitxers(path);

    for (let nomFitxer of files) {
        let filePath = path + (path.endsWith('/') ? '' : '/') + nomFitxer;
        if (excluits.includes(nomFitxer)) continue;
        // Objecte a introduir al json
        let nFile = {
            path: nomFitxer,
        }
        // borrar cuando funcione
        let linies = '';
        for (let i = 0; i < nivell; i++ ) {
            linies += '-';
        }
        // console.log(chalk.blue(linies) + chalk.green(esDirectori(filePath) ? '(D)' : '(F)') + chalk.yellow(nomFitxer));
        
        if (esDirectori(filePath)) {
            nFile.data = recorrerArbreFS(filePath, nivell + 1);
        } else {
            nFile.data = contingutFitxer(filePath);
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
function contingutFitxer(fitxer) {
    let contingut = fs.readFileSync(fitxer);
    return contingut;
}

/**
 * Obté els noms dels fitxers d'una ruta donada.
 * 
 * @param ruta
 * @return Array amb una llista de directoris al path donat
 */
function obtenirFitxers(ruta) {
    return fs.readdirSync(ruta)
}

/**
 * Determina si un fitxer és un directori o no.
 * 
 * @param nomFitxer Nom del fitxer a comprovar.
 * @return True si el fitxer és un directori. Altrament, false.
 */
function esDirectori(nomFitxer) {
    return fs.statSync(nomFitxer).isDirectory();
}

console.log(recorrerArbreFS('./'));