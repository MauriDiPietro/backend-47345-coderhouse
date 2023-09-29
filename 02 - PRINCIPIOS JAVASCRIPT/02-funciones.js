function saludar1(name){
    return `Hola ${name}`;
}

const saludar2 = (name) => {
    return `Hola ${name}`;
}

const saludar3 = name => `Hola ${name}`;

console.log(saludar1('Alberto'));
console.log(saludar2('Juan'));
console.log(saludar3('Pedro'));

/* ------------------------------- -callbacks ------------------------------- */

const array = [ 1, 2, 3, 4, 5, 6, 7 ];

const array2 = array.filter(x => x > 3);

console.log(array2);

// array.filter(function(x){
//     return x > 3
// })

/* ---------------------------------- scope --------------------------------- */
// let num = 0

const fn1 = () => {
    let num = 1;
    console.log(num);
}

// console.log(num);

fn1();

/* ---------------------------- template strings ---------------------------- */

let nombre = 'Juan'
let age = 45
let msg = 'Mi nombre es ' + nombre + ' y tengo ' + age + ' años'

// console.log(msg);

let nombr2 = 'Roman'
let age2 = 45
let msg2 = `Mi nombre es ${nombr2} y tengo ${age2} años`

console.log(msg2);

const msgMultilinea = `
    Este es un ejemplo
    de un mensaje
    en varias lineas
`

console.log(msgMultilinea);