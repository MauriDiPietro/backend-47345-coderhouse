/* ----------------------------- tipos de datos ----------------------------- */

/* ------------------------------- Primitivos ------------------------------- */

const string1 = "hola soy un string";

const number1 = 7;

const boolean1 = true; //false

const null1 = null;

const undef = undefined;

// console.log("variable string1 ---> ", typeof string1);
// console.log(typeof number1);


/* --------------------------------- objeto --------------------------------- */

console.log(new Date());
/* ------------------------------------ - ----------------------------------- */
function hola(name) {
    console.log(`Hola ${name}`);
}
hola('Juan');
/* ------------------------------------ - ----------------------------------- */
const holaArrow = (name) => {
    console.log(`Hola ${name}`);
}

holaArrow('Andres')
/* ------------------------------------ - ----------------------------------- */
class ClaseEjemplo{
    constructor(){}

    saludar(name){
        console.log(`Hola ${name}`);
    }
}

const intanciaClase = new ClaseEjemplo();
intanciaClase.saludar('Humberto');
/* ------------------------------------ - ----------------------------------- */
const array = ['Hola', 1, true, undefined];

const arrayObj = [ {name: 'Juan', age: 45}, {name: 'Carlos', age: 45} ];

console.log(arrayObj[1]);
/* ------------------------------------ - ----------------------------------- */
console.log(process.cwd());
