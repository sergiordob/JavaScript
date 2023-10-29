// Uma função que recebe dois números e uma operação como parâmetros e retorna o resultado da operação
function calcular(num1, num2, operacao) {
  // Uma variável que armazena o resultado da operação
  let resultado = 0;
  // Um switch que verifica qual é a operação e executa a operação correspondente
  switch (operacao) {
    case "+":
      resultado = num1 + num2; // soma os dois números
      break;
    case "-":
      resultado = num1 - num2; // subtrai os dois números
      break;
    case "/":
      if (num2 == 0) {
        // se o segundo número é zero
        return "Erro: divisão por zero"; // retorna uma mensagem de erro
      }
      resultado = num1 / num2; // divide os dois números
      break;
    case "*":
      resultado = num1 * num2; // multiplica os dois números
      break;
    default:
      return "Erro: operação inválida"; // retorna uma mensagem de erro
  }
  return resultado; // retorna o resultado da operação
}

// Uma variável que armazena o valor do primeiro número inserido pelo usuário
let num1 = prompt("Digite o primeiro número:");

// Uma variável que armazena o valor do segundo número inserido pelo usuário
let num2 = prompt("Digite o segundo número:");

// Uma variável que armazena o valor da operação inserida pelo usuário
let operacao = prompt("Digite a operação desejada: +, -, / ou *");

// Uma variável que armazena o resultado da função calcular
let resultado = calcular(num1, num2, operacao);

// Uma mensagem que mostra o resultado na tela
alert(
  "O resultado de " + num1 + " " + operacao + " " + num2 + " é " + resultado
);
