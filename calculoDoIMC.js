// Uma função que recebe o IMC como parâmetro e retorna a sua classificação de acordo com o sexo
function classificarIMC(imc, sexo) {
  // Uma variável que armazena a mensagem da classificação
  let mensagem = "";
  // Um switch que verifica o valor do IMC e atribui a mensagem correspondente
  switch (true) {
    case (imc < 19.1 && sexo == "F") || (imc < 20.7 && sexo == "M"):
      mensagem = "Você está abaixo do peso ideal.";
      break;
    case (imc >= 19.1 && imc <= 25.8 && sexo == "F") ||
      (imc >= 20.7 && imc <= 26.4 && sexo == "M"):
      mensagem = "Você está com o peso normal.";
      break;
    case (imc > 25.8 && imc <= 27.3 && sexo == "F") ||
      (imc > 26.4 && imc <= 27.8 && sexo == "M"):
      mensagem = "Você está marginalmente acima do peso ideal.";
      break;
    case (imc > 27.3 && imc <= 32.3 && sexo == "F") ||
      (imc > 27.8 && imc <= 31.1 && sexo == "M"):
      mensagem = "Você está acima do peso ideal.";
      break;
    case (imc > 32.3 && sexo == "F") || (imc > 31.1 && sexo == "M"):
      mensagem = "Você está obeso.";
      break;
    default:
      mensagem = "O valor do IMC ou do sexo é inválido.";
      break;
  }
  return mensagem; // retorna a mensagem da classificação
}

// Uma variável que armazena o valor do peso inserido pelo usuário
let peso = prompt("Digite o seu peso em quilogramas:");

// Uma variável que armazena o valor da altura inserida pelo usuário
let altura = prompt("Digite a sua altura em metros:");

// Uma variável que armazena o valor do sexo inserido pelo usuário
let sexo = prompt("Digite o seu sexo: F para feminino ou M para masculino");

// Uma variável que armazena o resultado da função calcularIMC
let imc = calcularIMC(peso, altura);

// Uma variável que armazena o resultado da função classificarIMC
let classificacao = classificarIMC(imc, sexo);

// Uma mensagem que mostra o resultado na tela
alert("O seu IMC é " + imc + ".\n" + classificacao);
