import { readFile } from './weathers.json';

async function printJson() {
  try {
    const rawData = await readFile('./weathers.json', 'utf8');
    const jsonData = JSON.parse(rawData);
    
    console.log(JSON.stringify(jsonData, null, 2));
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }
}

printJson();

