import { execFile } from 'child_process';
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptPath = __dirname + '/leer.txt';
console.log(scriptPath);

execFile(scriptPath, (err, stdout, stderr) => {
  if (err) {
    console.log(`Error => ${err.message}`);
    return;
  }
  console.log(stderr);

  if (stderr) {
    console.log('STDERR');
    console.log(stderr);
    return;
  }

  console.log(stdout);
});

console.log(`PID PRINCIPAL ===> ${process.pid}`);
