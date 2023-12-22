import { exec } from 'child_process';

const comando1 = 'ls -lh';

const comando2 = 'find /';

exec(comando2, (err, stdout, stderr) => {
  if (err) {  
    console.log(`Error => ${err.message}`);
    return;
  }

  if (stderr) { 
    console.log('STDERR');
    console.log(stderr);
    return;
  }

  console.log(stdout);
});

console.log(`PID PRINCIPAL ===> ${process.pid}`);