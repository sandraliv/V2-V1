import {
  createDirIfNotExists,
  readFile,
  readFilesFromDir,
} from './lib/file.js';
import { parseTeamsJson } from './lib/parse.js';

const INPUT_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = await readFilesFromDir(INPUT_DIR);
  for await (const file of files) {
    if (file.indexOf('gameday') < 0) {
      continue;
    }
    console.log(file);
    const fileContents = await readFile(file);
  }
  const teams = await readFile('data/teams.json');
  const b = parseTeamsJson(teams);
  console.log(b);
}

main().catch((error) => {
  console.error('error generating', error);
});
