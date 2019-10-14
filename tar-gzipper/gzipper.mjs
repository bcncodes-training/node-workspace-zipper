import fs from 'fs';
import path from 'path';

const tar = require ('tar');

const fitxersExclosos = ['node_modules'];

const lecturaDirectoris = util.promisify (fs.readdir);
const tipusFitxer = util.promisify (fs.stat);

const lecturaFitxer = util.promisify (fs.readFile);
const escripturaFitxer = util.promisify (fs.writeFile);

const fitxerExisteix = util.promisify (fs.access);
const crearDirectori = util.promisify (fs.mkdir);

export class Gzipper
{
	directori;
	dadesFitxers;
	
	constructor (directori)
	{
		this.directori = directori;
		this.dadesFitxers = [];
	}
	
	async llegeixDirectoris()
	{
		const nomFitxers = await lecturaDirectoris (this.directori);
		
		for (let fitxer of nomFitxers)
		{
			if (fitxersExclosos.includes (fitxer)) continue;
			
			fitxer = `${this.directori}/${fitxer}`;
			
			const fitxerTipus = await tipusFitxer (fitxer);
			
			if (fitxerTipus.isFile())
				dadesFitxers.push (fitxer);
		
			if (fitxerTipus.isDirectory()) this.llegeixDirectoris (fitxer);
		}
	}
	
	async comprimeixDirectoris (fitxerDesti)
	{
		await this.llegeixDirectoris (this.directori);
		
		try {
			tar.c ({gzip: true, file: fitxerDesti}, this.dadesFitxers)
				.then (`Fitxer comprimits: ${this.directori}`);
		} catch (err) {
			return console.error (err);
		}
	}
	
	async descomprimeixDirectoris (fitxerOrigen)
	{
		let fitxerOrigenPathAbsolut = path.resolve (fitxerOrigen);
		
		// Intentem crear el directori destí i hi ens desplacem
		try {
			await crearDirectori (this.directori, {recursive:true});
			process.chdir (this.directori);
		} catch (err) {
			return console.error (err);
		}
		
		try {
			tar.x ({file: fitxerOrigen})
				.then (`Fitxer descomprimit: ${fitxerOrigen}`);
		} catch (err) {
			return console.error (err);
		}
	}
};
