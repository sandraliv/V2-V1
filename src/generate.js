import { writeFile } from 'fs/promises';
import { join } from 'path';
import {
  createDirIfNotExists,
  readFile,
  readFilesFromDir,
} from './lib/file.js';
import { indexTemplate, leikirTemplate, stadaTemplate } from './lib/html.js';
import { parseGameday } from './lib/parse.js';
import { calculateStandings } from './lib/score.js';
const INPUT_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = await readFilesFromDir(INPUT_DIR);
  //'data' er fylki af parsed gögnum sem við viljum
  //skrifa niður í HTML skrá sem heitir 'index.html'
  //og síðan í framhaldinu 'stada.html' og 'leikir.html'
  const data = [];
  for await (const file of files) {
    if ((file.indexOf('gameday') < 0) | (file.length == 0)) {
      continue;
    }
    const fileContents = await readFile(file);

    //Ef fileContent er null, hoppa yfir
    if (!fileContents) {
      continue;
    }
    const parsed = parseGameday(fileContents);
    data.push(parsed);
  }
  //const teams = await readFile('data/teams.json');
  //const b = parseTeamsJson(teams);
  //await writeFile(join(OUTPUT_DIR, 'index.html'), indexTemplate(b), {
  //  flag: 'w+',
  //});

  //Hnappar á forsíðu á aðrar html síður
  const Buttons = [
    { title: 'Staða', html: 'stada.html' },
    { title: 'Leikir', html: 'leikir.html' },
  ];
  const calculatedStandings = calculateStandings(data);

  const indexHtml = indexTemplate('Forsíða', Buttons);
  const indexFilename = join(OUTPUT_DIR, 'index.html');
  await writeFile(indexFilename, indexHtml);

  const stadaHtml = stadaTemplate('Staða deildar', calculatedStandings);
  const stadaFilename = join(OUTPUT_DIR, 'stada.html');
  await writeFile(stadaFilename, stadaHtml);

  const leikirHtml = leikirTemplate('Leikir', data);
  const leikirFilename = join(OUTPUT_DIR, 'leikir.html');
  await writeFile(leikirFilename, leikirHtml);
}

main().catch((error) => {
  console.error('error generating', error);
});
