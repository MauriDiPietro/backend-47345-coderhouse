//npm i jest
//.spec o .test

import Calculadora from "../calculadora.js";

describe("Conjunto de pruebas de suma", () => {
  it("deberia sumar dos numeros", () => {
    //etapa de preparacion
    const num1 = 4;
    const num2 = 8;
    const resultEsperado = 12;

    //etapa de ejecucion
    const result = Calculadora.suma(num1, num2);

    //etapa de verificacion
    expect(result).toBe(resultEsperado);
  });

  it("si los argumentos no son numéricos, debe responder con un error", () => {
    const num1 = 4;
    const num2 = ["hola"];

    const funciontest = () => Calculadora.suma(num1, num2);

    expect(funciontest).toThrow("Argumentos invalidos");
  });
});
