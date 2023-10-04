/* ---------------------------------- trim ---------------------------------- */

const name1 = "       Andres     ";
const nameNormalized = name1.trim();
console.log(nameNormalized);

/* ---------------------------------- flat ---------------------------------- */

const array = [1, 2, [3, 4], [7, [8,[ 9]]]];
console.log(array.flat(3));