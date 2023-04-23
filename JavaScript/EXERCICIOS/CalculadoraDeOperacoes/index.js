const numberOne = prompt("Escolha um número!");
const numberTwo = prompt("Escolha outro número!");

const x = parseFloat(numberOne);
const y = parseFloat(numberTwo);

const addition = x + y;
const subtraction = x - y;
const multiplication = x * y;
const division = x / y;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    addition +
    "\nSubtração: " +
    subtraction +
    "\nMultiplicação: " +
    multiplication +
    "\nDivisão: " +
    division
);
