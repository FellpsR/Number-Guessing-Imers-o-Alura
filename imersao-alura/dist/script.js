// Gera um número entre 1 e 100
var numberSecret = Math.floor(Math.random() * 100) + 1; 

var playerName;
// while (true) {
//   playerName = prompt("Digite seu nome:");

//   // Verifica se o nome contém apenas letras e caracteres especiais, sem números
//   if (/^[A-Za-z]+$/.test(playerName)) {
//     break; // Sai do loop se o nome estiver correto
//   } else {
//     alert("Por favor, digite um nome válido contendo apenas letras e caracteres especiais, sem números.");
//   }
// }

// var strike;
// while (strike !== numberSecret) {
//   strike = Math.floor(prompt(`${playerName}, Digite um número entre 1 e 100`));

  //verifica se o usuário fez o input de um número
  if (isNaN(strike)) {
    alert(`${playerName}, Por favor, digite um número válido.`);
  } else if (strike === numberSecret) {
    alert(`${playerName}, Você acertou na mosca, o número secreto é ${numberSecret}!`);
  } else if (strike <= 0){
    alert(`${playerName}, Número inválido, Digite um número entre 1 e 100`);
  } else if (strike > numberSecret) {
    alert(`Errooooou, o número secreto é menor do que ${strike}!`);
  } else {
    alert(`Errooooou, o número secreto é maior do que ${strike}!`);
  }
}