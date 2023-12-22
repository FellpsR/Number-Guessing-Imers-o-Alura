// Gera um número entre 1 e 100
var numberSecret = Math.floor(Math.random() * 100) + 1; 

var playerName;
while (true) {
  playerName = request.form["name-input"];

  // Verifica se o nome contém apenas letras e caracteres especiais, sem números
  if (/^[A-Za-z]+$/.test(playerName)) {
    break; // Sai do loop se o nome estiver correto
    
  } else {
    error_message = "Por favor, digite um nome válido contendo apenas letras e caracteres especiais, sem números.";
    return render_template("index.html", error_message); // Retorna a mensagem de erro para o usuário
  }
}

var strike;
while (strike !== numberSecret) {
  strike = Math.floor(prompt(`${playerName}, Digite um número entre 1 e 100`));

  //verifica se o usuário fez o input de um número
  if (isNaN(strike)) {
    error_message = `${playerName}, Por favor, digite um número válido.`;
    return render_template("index.html", error_message);

  } else if (strike === numberSecret) {
    alert(`${playerName}, Você acertou na mosca, o número secreto é ${numberSecret}!`);

  } else if (strike <= 0){
    error_message = `${playerName}, Número inválido, Digite um número entre 1 e 100`;
    return render_template("index.html", error_message);

  } else if (strike > numberSecret) {
    alert(`Errooooou, o número secreto é menor do que ${strike}!`);

  } else {
    alert(`Errooooou, o número secreto é maior do que ${strike}!`);
  }
}