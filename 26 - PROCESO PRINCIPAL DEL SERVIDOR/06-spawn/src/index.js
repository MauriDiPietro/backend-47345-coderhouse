import { spawn } from 'child_process';

const child = spawn('find', ['/']);

child.stdout.on('data', (data) => {
  console.log('RECIBI DATA STDOUT');
  console.log(`stdout:\n\n\n${data}`);
});

child.stderr.on('data', (data) => {
  console.log('RECIBI DATA STDERR');
  console.error(`stderr: ${data}`);
});

child.on('error', (error) => {
  console.error(`error: ${error.message}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

