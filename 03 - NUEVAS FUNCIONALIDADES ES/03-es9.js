/* ----------------------------- spread operator ---------------------------- */

const array = [1, 2, 3, 4, 5, 6];
console.log(...array);
console.log(Math.min(...array));

const array2 = [ ...array, 7, 8, 9 ]

console.log(array2);

const obj1 = {
    a: 1,
    b: 2,
    c: 3
};

const obj2 = {
    ...obj1,
    d: 4
};

console.log(obj2);

/* ------------------------------ rest operator ----------------------------- */

const myFun1 = (a, b, ...otherParams) => {
    console.log(a);
    console.log(b);
    console.log(otherParams);
}

console.log('---------------------------');
myFun1(1, 2, 'asdas', [], 4)
