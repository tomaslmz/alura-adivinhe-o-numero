const definirNumeroSecreto = (max, min) =>  (Math.floor(Math.random() * (max - min) + min));

let numeroSecreto = definirNumeroSecreto(30, 1);

let chute = null;

while(chute !== numeroSecreto) {
  chute = parseInt(prompt(`Chute um número de 1 - 30, número: ${numeroSecreto}`));

  if(typeof chute !== 'number') {
    alert('Digite um número válido!');
  }

  if(typeof chute === 'number' && chute > numeroSecreto) {
    alert('O número secreto é menor que o número chutado!');
  } else if(typeof chute === 'number' && numeroSecreto > chute) {
    alert('O número secreto é maior que o número chutado!');
  }

  if(typeof chute === 'number' && chute === numeroSecreto) {
    alert('Parabéns, você acertou o número secreto');
  }
}