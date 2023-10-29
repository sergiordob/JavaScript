function calcular(num1, num2, operacao) {
  let resultado = 0;
  switch (operacao) {
    case "+":
      resultado = num1 + num2; 
      break;
    case "-":
      resultado = num1 - num2; 
      break;
    case "/":
      if (num2 == 0) {
        return "Erro: divisão por zero"; 
      }
      resultado = num1 / num2; 
      break;
    case "*":
      resultado = num1 * num2; 
      break;
    default:
      return "Erro: operação inválida"; 
  }
  return resultado; 
}

let num1 = prompt("Digite o primeiro número:");

let num2 = prompt("Digite o segundo número:");

let operacao = prompt("Digite a operação desejada: +, -, / ou *");

let resultado = calcular(num1, num2, operacao);

alert(
  "O resultado de " + num1 + " " + operacao + " " + num2 + " é " + resultado
);
