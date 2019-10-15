import { Gzipper } from './gzipper.mjs';
import chalk from 'chalk';

const mostrarAjuda = () => {
		
	let textAjuda = "Ús:\n\t-c|--comprimir directoriArrel [nomFitxer=tarball]\n\t-d|--descomprimir nomFitxer [directoriDesti=./]\n\t-h|--help";
	
	return textAjuda;
}

// Configuració
const EXTENSIO = '.tgz';
const FITXER_DESTI_DEFAULT = 'tarball';
const DIRECTORI_DESTI_DEFAULT = './';

if (process.argv.length >= 3)
{
	let mode = process.argv[2]; 
	
	// Avaluem arguments de la línia de comandes
	switch (mode)
	{
		// Comprimir
		case ("-c"):
		case ("--comprimir"): // args: (3)directoriArrel, [(4)nomFItxer]
		{
			if (process.argv.length < 4) {
				console.error(chalk.red(`Es requereix almenys un argument per a la opció ${chalk.yellow(mode)}`) + `\n${mostrarAjuda()}`);
				break;
			}
			
			let directoriOrigen = process.argv[3];
			
			
			// Si no hi ha nom de fitxer destí, s'ha d'utilitzar valor per defecte
			let fitxerDesti = ((process.argv[4]) ?  process.argv[4] : FITXER_DESTI_DEFAULT) + EXTENSIO;

			let gzipper = new Gzipper(directoriOrigen);
			gzipper.comprimeixDirectoris (fitxerDesti);
			break;
		}
		// Descomprimir
		case ("-d"):
		case ("--descomprimir"):
		{
			if (process.argv.length < 4) {
				console.error(chalk.red(`Es requereix almenys un argument per a la opció ${chalk.yellow(mode)}`) + `\n${mostrarAjuda()}`);
				break;
			}
			
			let fitxerOrigen = process.argv[3] + ((process.argv[3].indexOf(EXTENSIO) === -1) ? EXTENSIO : '');
			let directoriDesti = (process.argv[4]) ?  process.argv[4] : DIRECTORI_DESTI_DEFAULT;
			
			
			let gzipper = new Gzipper(directoriDesti);
			gzipper.descomprimeixDirectoris (fitxerOrigen);
			
			break;
		}
		
		case ("-h"):
		case ("--help"):
		{
			console.log(mostrarAjuda());
			break;
		}
		default:
		{
			console.error(chalk.red(`Opció no vàlida: `) + `${mode}\n${mostrarAjuda()}`);
		}
	}
}
else
{
	// Quan no se li entren tots els arguments requerits
	console.error(chalk.red(`Es requereix una opció `) + `\n${mostrarAjuda()}`);
}

