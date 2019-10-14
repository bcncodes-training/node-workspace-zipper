import fs from 'fs';
import util from 'util';
import zlib from 'zlib';
import path from 'path';

const fitxersExclosos = ['node_modules'];

const lecturaDirectoris = util.promisify (fs.readdir);	
const tipusFitxer = util.promisify (fs.stat);

const lecturaFitxer = util.promisify (fs.readFile);
const escripturaFitxer = util.promisify (fs.writeFile);

const fitxerExisteix = util.promisify (fs.access);
const crearDirectori = util.promisify (fs.mkdir);

const directoriFitxerDades = '/tmp/gzipper-dades/'

export class Gzipper
{	
	directori;
	dadesFitxers;
	
	constructor(directori)
	{
		this.directori = directori;
		this.dadesFitxers = [];
	}
	
	async llegeixDirectoris () 
	{
		const nomFitxers = await lecturaDirectoris (this.directori);
		
		for (let fitxer of nomFitxers)
		{
			if (fitxersExclosos.includes (fitxer))	continue;
			
			fitxer = `${this.directori}/${fitxer}`;
			
			const fitxerTipus = await tipusFitxer (fitxer);
			
			if (fitxerTipus.isFile())
			{
				let document =
				{
					"ruta" : `${fitxer}`,
					"dades" : fs.readFileSync (fitxer)			
				};
				
				this.dadesFitxers.push (document);
			}
			
			if (fitxerTipus.isDirectory()) this.llegeixDirectoris (fitxer);	
		}
	}
	
	async comprimeixDirectoris (fitxerDesti)
	{
		await this.llegeixDirectoris (this.directori);
		
		try {
			await escripturaFitxer (fitxerDesti, zlib.gzipSync (JSON.stringify (this.dadesFitxers)));
			console.log (`Fitxer correctament creat: ./${fitxerDesti}`);
		} catch (err) {
			console.error (err);
		}
	}
	
	async descomprimeixDirectoris (fitxerOrigen)
	{	
		let fitxerOrigenPathAbsolut = path.resolve (fitxerOrigen);

		// Intentem crear el directori destí i hi ens hi movem
		try
		{
			await crearDirectori (this.directori, {recursive: true});
			process.chdir (this.directori);
		} catch (err) {
			console.error(err);
		}

		try
		{
			let dades = await lecturaFitxer (fitxerOrigenPathAbsolut);
			this.dadesFitxers = JSON.parse (zlib.gunzipSync (dades));
		}
		catch (error)
		{
			return console.error (error);
		}
		
		this.dadesFitxers.forEach (fitxer => {
			let bufferDades = Buffer.from (fitxer.dades.data);
			let rutaFitxer = fitxer.ruta;

/*
			if (fitxerExisteix (fitxer.ruta, fs.F_OK))
				rutaFitxer += ".copia";
*/			
			escripturaFitxer (rutaFitxer, bufferDades).
				then (() => {console.log (`Restablert fitxer: ${rutaFitxer}`)});
		});
	}
};
