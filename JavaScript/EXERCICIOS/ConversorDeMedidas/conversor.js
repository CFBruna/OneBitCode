const input = prompt("Insira um valor em METROS:");
let resultado = prompt(
  "Escolha a alternativa para qual deseja converter: \n1) Milímetros (mm) \n2) Centímetros (cm) \n3) Decímetros (dm) \n4) Decâmetros (dam) \n5) Hectômetros (hm) \n6) Quilômetros (km)"
);

let resultadoNumerico = parseFloat(resultado);

switch (resultadoNumerico) {
  case 1:
    alert(
      "O Resultado é: " + input + "m = " + input * 1000 + " Mílimetros (mm)"
    );
    break;
  case 2:
    alert(
      "O Resultado é: " + input + "m = " + input * 100 + " Centímetros (cm)"
    );
    break;
  case 3:
    alert("O Resultado é: " + input + "m = " + input * 10 + " Decímetros (dm)");
    break;
  case 4:
    alert(
      "O Resultado é: " + input + "m = " + input / 10 + " Decâmetros (dam)"
    );
    break;
  case 5:
    alert(
      "O Resultado é: " + input + "m = " + input / 100 + " Hectômetros (hm)"
    );
    break;
  case 6:
    alert(
      "O Resultado é: " + input + "m = " + input / 1000 + " Quilômetros (km)"
    );
    break;

  default:
    alert("Opção inválida!");
}
