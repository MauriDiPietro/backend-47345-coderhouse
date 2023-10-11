const fs = require('fs');

const products = [
    {
        name: 'Celular',
        price: 150000,
        stock: 50
    }, 
    {
        name: 'Teclado',
        price: 2000,
        stock: 45
    }
];
/*
{
    "name": "Celular",
    "price": 150000,
    "stock": 50
}, 
*/

const path = './products.json'

fs.writeFileSync(path, JSON.stringify(products));
const info = fs.readFileSync(path, 'utf8');
const infoJS = JSON.parse(info)
console.log(infoJS);


