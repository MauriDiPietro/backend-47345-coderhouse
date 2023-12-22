process.on('beforeExit', (code) => {
  console.log(`BeforeExit ==> El proceso termino con codigo ${code}`);
});

console.log('EJECUTANDO MI PROGRAMA');
// process.exit(0)