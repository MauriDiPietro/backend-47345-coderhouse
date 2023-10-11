const fs = require('fs');

const path = './file2.txt';

if(fs.existsSync(path)) {
    fs.readFile(path, 'utf-8', (error, info)=>{
        if(error) console.log(error);
        else {
            console.log(info);
            fs.appendFile(path, 'segundo texto', (error, info)=>{
                if(error) console.log(error);
                else {
                    console.log('info adicionada con éxito');
                }
                fs.readFile(path, 'utf-8', (error, info)=>{
                    if(error) console.log(error);
                    else {
                        console.log(info);
                    }
                })
            })
        }
    })
} else {
    fs.writeFile(path, 'primer texto', (error)=>{
        if(error) console.log(error);
        else console.log('archivo creado con éxito');
    })
}