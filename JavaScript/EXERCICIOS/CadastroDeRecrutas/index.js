const nome = prompt("Informe o primeiro nome do recruta:");
const sobrenome = prompt("Informe o sobrenome do recruta:");
const estudo = prompt("Qual o campo de estudo do recruta?");
const nascimento = prompt("Qual o ano de nascimento do recruta?");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    estudo +
    "\nIdade: " +
    (2023 - nascimento)
);
