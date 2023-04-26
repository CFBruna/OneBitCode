const nameVehicle = prompt("Digite o nome do primeiro veículo:");
const carSpeed = prompt("Digite a velocidade do primeiro veículo:");
const nameVehicle2 = prompt("Digite o nome do segundo veículo:");
const carSpeed2 = prompt("Digite a velocidade do segundo veículo:");

if (carSpeed > carSpeed2) {
  alert(nameVehicle + " é mais rápido do que " + nameVehicle2);
} else if (carSpeed2 > carSpeed) {
  alert(nameVehicle2 + " é mais rápido do que " + nameVehicle);
} else {
  alert(
    nameVehicle +
      " " +
      "e" +
      " " +
      nameVehicle2 +
      " " +
      "possuem a mesma velocidade!"
  );
}
