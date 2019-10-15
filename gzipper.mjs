import fs from 'fs';
import path from 'path';
import util from 'util';
import tar from 'tar';
import chalk from 'chalk';

const fitxersExclosos = ['node_modules', '.git'];

const obtenirFitxersDirectori = util.promisify (fs.readdir);
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
	
	async llegeixDirectoris (directori)
	{	
		const nomFitxers = await obtenirFitxersDirectori (directori);
		
		for (let fitxer of nomFitxers)
		{
			if (fitxersExclosos.includes (fitxer)) continue;
			
			fitxer =  `${directori}/${fitxer}`;
					
			console.log (chalk.blue("Fitxer llegit: ") + fitxer);
			
			const fitxerTipus = await tipusFitxer (fitxer);
			
			if (fitxerTipus.isDirectory()) {
				this.llegeixDirectoris (fitxer);
			} else {
				this.dadesFitxers.push (fitxer);
			}
			
		}
	}
	
	async creaNouDirectoriPosiciona()
	{
		/*
		 * Intentem crear el directori destí i hi ens desplacem
		 * Si existeix, no el crea.
		 */
		try {
			await crearDirectori (this.directori, {recursive:true});
			process.chdir (this.directori);
		} catch (err) {
			return console.error (err);
		}
	}
	
	async comprimeixDirectoris (fitxerDesti)
	{
		this.dadesFitxers = [];
		let fitxerDestiPathAbsolut = path.resolve (fitxerDesti);
		
		await this.creaNouDirectoriPosiciona();
		
		await this.llegeixDirectoris ('.').then(async () => {
			this.dadesFitxers.forEach (fitxer => {
				console.log (fitxer);
			})
			
			try {
				await tar.c ({gzip: true, file: fitxerDestiPathAbsolut}, this.dadesFitxers)
					.then(_ => console.log (chalk.yellow(`Fitxers comprimits a: ${fitxerDesti}`)));
			} catch (err) {
				return console.error (err);
			}	
		});
		
		
	}
	
	async descomprimeixDirectoris (fitxerOrigen)
	{
		let fitxerOrigenPathAbsolut = path.resolve (fitxerOrigen);
		
		await this.creaNouDirectoriPosiciona();
		
		try {
			await tar.x ({file: fitxerOrigenPathAbsolut})
				.then (_ => console.log (chalk.yellow (`Fitxer descomprimit: ${fitxerOrigenPathAbsolut}`)));
		} catch (err) {
			return console.error (err);
		}
	}
};
