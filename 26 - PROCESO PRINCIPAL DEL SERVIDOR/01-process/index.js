console.log("CWD: ", process.cwd()); //directorio actual de trabajo
console.log("PID: ", process.pid); //process id
console.log("VERSION: ", process.version); //version node
console.log("TITLE: ", process.title); //proceso que se ejecuta
console.log("PLATFORM: ", process.platform); //sistema operativo
console.log("MEMORY: ", `${JSON.stringify(process.memoryUsage())}`);

process.exit()

console.log('hola');