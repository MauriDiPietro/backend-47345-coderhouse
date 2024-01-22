class Calc {
  chequearValores(num1, num2) {
    const verif1 = isNaN(num1);
    const verif2 = isNaN(num2);
    if (verif1 || verif2) return true;
    else return false;
  }

  suma(num1, num2) {
    if (this.chequearValores(num1, num2))
      throw new Error("Argumentos invalidos");
    return num1 + num2;
  }

  resta(num1, num2) {
    if (this.chequearValores(num1, num2))
      throw new Error("Argumentos invalidos");
    return num1 - num2;
  }
}

const Calculadora = new Calc();

export default Calculadora;
