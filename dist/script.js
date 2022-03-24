function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativaAtual <= quantidadeMaximaTentativas) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML =
        "Você acertou, parabéns! Recarregue a página para jogar novamente!";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML =
        "Ops! Você deve digitar um número entre 0 e 10!";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou! Dica: O número secreto é menor do que seu chute!";
      tentativaAtual++;
      console.log(tentativaAtual);
    } else {
      elementoResultado.innerHTML =
        "Você errou! Dica: O número secreto é maior do que seu chute!";
      tentativaAtual++;
    }
  } else {
    elementoResultado.innerHTML =
      "Poxa, suas tentativas acabaram! O número secreto era " +
      numeroSecreto +
      ". Recarregue a página e jogue novamente!";
  }
}
var numeroSecreto = parseInt(Math.random() * 11);
var quantidadeMaximaTentativas = 3;
var tentativaAtual = 1;