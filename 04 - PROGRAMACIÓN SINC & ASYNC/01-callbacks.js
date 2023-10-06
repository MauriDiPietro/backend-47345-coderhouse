/* -------------------------------- callbacks ------------------------------- */

const suma = (a, b) => {
  return a + b;
};
const resta = (a, b) => {
  return a - b;
};
const multipicacion = (a, b) => {
  return a * b;
};
const division = (a, b) => {
  return a / b;
};

const operaciones = (a, b, callback) => {
  console.log(callback(a, b));
};

operaciones(1, 2, suma);
operaciones(1, 2, resta);
operaciones(1, 2, multipicacion);
operaciones(1, 2, division);

/* ------------------------------------ - ----------------------------------- */

setTimeout(() => {
  console.log("Este mensaje se muestra después de 3 segundos");
}, 3000);

/* ------------------------------------ - ----------------------------------- */

const saludo = (name) => {
  return `Hola ${name}!`;
};

const functionTest = (cb, name) => {
  return cb(name);
};

console.log(functionTest(saludo, "Juan"));
