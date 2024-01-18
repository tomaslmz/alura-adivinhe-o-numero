alert('Olá! Você está em um jogo de adivinhar o número!');
const limiteNumero = parseInt(prompt('Por padrão, o número secreto fica entre 0 - 30, mas agora você pode escolher o máximo!'));

const definirNumeroSecreto = (max, min) =>  (Math.floor(Math.random() * (max - min) + min));

let numeroSecreto = definirNumeroSecreto(limiteNumero, 1);

let chute;
let tentativas;

while(chute !== numeroSecreto) {
  chute = parseInt(prompt(`Chute um número de 1 - ${limiteNumero}`));

  if(typeof chute !== 'number') {
    alert('Digite um número válido!');
    break;
  }

  if(chute > numeroSecreto) {
    alert(`Você errou! O número secreto é menor que ${chute}`);
  } else if(numeroSecreto > chute) {
    alert(`Você errou! O número secreto é maior que ${chute}`);
  }

  const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

  if(chute === numeroSecreto) {
    alert(`Parabéns! Você acertou o número secreto em ${tentativas} ${palavraTentativa}, era ${numeroSecreto}!`);
    break;
  }
}