process.on('exit', (code) => {
  console.log(`Exit ==> El proceso termino con codigo ${code}\n\n`);
});

console.log("EJECUTANDO MI PROGRAMA")

// process.exit(1);
// process.exit(0);
throw new Error('error1');