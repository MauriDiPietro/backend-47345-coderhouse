const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("No se puede dividir un nro por 0");   //catch()
    } else {
      resolve(a / b); //.then()
    }
  });
};

// console.log(divisionPromesa(1,2))
// console.log(divisionPromesa(1, 0))

divisionPromesa(1, 2)
  .then((resultado) => {
    console.log(resultado);
    return resultado;
  })
  .catch((error) => console.log(error));

divisionPromesa(1, 0)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

/* ------------------------------------ - ----------------------------------- */

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(response => console.log(response))
