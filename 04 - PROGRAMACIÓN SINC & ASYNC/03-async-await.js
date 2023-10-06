const sumaPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Suma: Operación innecesaria");
    } else {
      resolve(a + b);
    }
  });
};

const restaPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Resta: Operación invalida");
    } else if (a - b < 0) {
      reject("Resta: La calculadora solo devuelve valores positivos");
    } else {
      resolve(a - b);
    }
  });
};

const multiplicacionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Multiplicacion: La calculadora solo devuelve valores positivos");
    } else {
      resolve(a * b);
    }
  });
};

const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("No se puede dividir un nro por 0");
    } else {
      resolve(a / b);
    }
  });
};

/* ------------------------------------ - ----------------------------------- */

const sumaAsync = async(a, b) => {
  try {
    const response = await sumaPromesa(a, b);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const restaAsync = async(a, b) => {
  try {
    return await restaPromesa(a, b);
  } catch (error) {
    console.log(error);
  }
}

const multipicacionAsync = async (a, b) => {
  try {
    return await multiplicacionPromesa(a, b)
  } catch (error) {
    console.log(error);
  }
}

const divisionAsync = async(a, b) => {
  try {
    return await divisionPromesa(a, b);
  } catch (error) {
    console.log(error);
  }
}

const test = async() => {
  console.log(await divisionAsync(1, 2))
  console.log(await sumaAsync(4, 3));
  console.log(await restaAsync(8, 1));
  console.log(await multipicacionAsync(7, 1));
}

test()