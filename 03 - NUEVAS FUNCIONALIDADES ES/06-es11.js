/* --------------------------------- nullish -------------------------------- */ 
//falsey values:
//0, null, undefined, false, NaN, ''
const var1 = null;
if(var1) console.log('ok');

let altura = 100;
// console.log(altura || 100);
console.log(altura ?? 1000);

/* --------------------------- variables privadas --------------------------- */

class Person {
    #fullName;
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.#fullName = `${this.firstname} ${this.lastname}`;
    }

    getFullName(){
        return this.#fullName;
    };
};

const person = new Person('Juan', 'Perez');
console.log(person.getFullName());
// console.log(Person.#fullName);