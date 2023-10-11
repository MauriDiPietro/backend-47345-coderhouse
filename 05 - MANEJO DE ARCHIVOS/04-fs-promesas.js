const fs = require('fs');

const path = './file3.txt';

if(fs.existsSync(path)){
    fs.promises.readFile(path, 'utf-8')
        .then((info)=>{
            console.log(info);
            return fs.promises.appendFile(path, 'segundo texto');
        })
        .then(()=>{
            console.log('info agregada con éxito');
            return fs.promises.readFile(path, 'utf-8')
        })
        .then((info)=>console.log(info))
        .catch((error)=>{
            console.log(error);
        })
} else {
    fs.promises
        .writeFile(path, 'primer texto')
        .then(()=> console.log('archivo creado con éxito'))
        .catch((error)=>console.log(error))
}

