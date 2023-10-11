const fs = require('fs');

const path = './file1.txt';

if(fs.existsSync(path)) {
    const info = fs.readFileSync(path, 'utf-8');
    console.log(info);
    fs.appendFileSync(path, ' segundo texto');
    const info2 = fs.readFileSync(path, 'utf-8');
    console.log('--> segunda lectura: ', info2);
} else {
    fs.writeFileSync(path, 'primer texto')
}

// fs.unlinkSync(path) //eliminar
