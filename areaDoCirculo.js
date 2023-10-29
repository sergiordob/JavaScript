// Uma função que recebe o raio do círculo como parâmetro e retorna a sua área
function areaCirculo(raio) {
  // A constante PI é aproximadamente 3.14159
  const PI = Math.PI;
  // A fórmula da área do círculo é PI * raio * raio
  return PI * raio * raio;
}

// Uma variável que armazena o valor do raio inserido pelo usuário
let raio = prompt("Digite o valor do raio do círculo:");

// Uma variável que armazena o resultado da função areaCirculo
let area = areaCirculo(raio);

// Uma mensagem que mostra o resultado na tela
alert("A área do círculo de raio " + raio + " é " + area);
