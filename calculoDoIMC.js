function classificarIMC(imc, sexo) {
  let mensagem = "";
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
  return mensagem; 
}

let peso = prompt("Digite o seu peso em quilogramas:");

let altura = prompt("Digite a sua altura em metros:");

let sexo = prompt("Digite o seu sexo: F para feminino ou M para masculino");

let imc = calcularIMC(peso, altura);

let classificacao = classificarIMC(imc, sexo);

alert("O seu IMC é " + imc + ".\n" + classificacao);
