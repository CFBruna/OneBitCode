const attackCharacter = prompt("Insira o nome do personagem atacante:");
const attackPower = prompt("Insira o poder de ataque do personagem atacante:");

const defenseCharacter = prompt("Insira o nome do personagem defensivo:");
let health = prompt(
  "Insira quantos pontos de vida o personagem defensivo tem:"
);
const defensePower = prompt("Qual poder de defesa o personagem defensivo tem:");
const shield = prompt("O personagem defensivo possui escudo? (Sim/Não)");

let damage = 0;

if (attackPower > defensePower && shield === "Não") {
  damage = attackPower - defensePower;
} else if (attackPower > defensePower && shield === "Sim") {
  damage = (attackPower - defensePower) / 2;
}

health -= damage;

alert(
  attackCharacter +
    " causou " +
    damage +
    " pontos de dano em " +
    defenseCharacter
);
alert(
  attackCharacter +
    "\nPoder de ataque: " +
    attackPower +
    "\n\n" +
    defenseCharacter +
    "\nPontos de vida: " +
    health +
    "\nPoder de defesa: " +
    defensePower +
    "\nPossui escudo: " +
    shield
);
