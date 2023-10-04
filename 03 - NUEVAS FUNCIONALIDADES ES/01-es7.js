/* ------------------------------- exponencial ------------------------------ */

const expEs6 = Math.pow(2, 3); // 2 * 2 * 2
const expEs7 = 2 ** 3;

console.log(expEs6);
console.log(expEs7);

/* -------------------------------- includes -------------------------------- */

const array = [1, 2, 3, 4, 5, 6];
console.log('Existe dentro del arreglo: ', array.includes(5));
console.log('No existe dentro del arreglo: ', array.includes(8));

const users = [
    { name: 'Juan', age: 50 },
    { name: 'Marcos', age: 40 },
    { name: 'Martin', age: 30 }
];

const ageSearch = 40;
const userSearch = users.some((user)=> {        //retorna true/false
    return user.age === ageSearch;
});

const userSearch2 = users.find((user)=> {       //retorna el objeto
    return user.age === ageSearch;
});

console.log(userSearch2);

if(userSearch) console.log(`Existe una persona con la edad de ${ageSearch}`);
else console.log('No existe persona con la edad buscada');