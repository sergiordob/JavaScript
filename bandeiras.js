// Uma variável que armazena o elemento select do HTML
let selectPais = document.getElementById("select-pais");

// Uma variável que armazena o elemento div do HTML
let divBandeira = document.getElementById("div-bandeira");

// Uma variável que armazena a URL base da API de bandeiras
let urlBase = "https://flagsapi.com/";

// Uma função que cria uma lista de países com seus códigos e nomes
function criarListaPaises() {
  // Uma variável que armazena um array de objetos com os códigos e nomes dos países
  let listaPaises = [
    { codigo: "AD", nome: "Andorra" },
    { codigo: "AE", nome: "Emirados Árabes Unidos" },
    { codigo: "AF", nome: "Afeganistão" },
    // Você pode adicionar mais países aqui
  ];

  // Um loop que percorre o array de países
  for (let pais of listaPaises) {
    // Uma variável que cria um elemento option do HTML
    let option = document.createElement("option");

    // Atribui o código do país como o valor do option
    option.value = pais.codigo;

    // Atribui o nome do país como o texto do option
    option.textContent = pais.nome;

    // Adiciona o option ao select do HTML
    selectPais.appendChild(option);
  }
}

// Uma função que exibe a bandeira do país selecionado
function exibirBandeira() {
  // Uma variável que armazena o valor do select do HTML
  let codigoPais = selectPais.value;

  // Uma variável que cria um elemento img do HTML
  let img = document.createElement("img");

  // Atribui a URL da API de bandeiras como o atributo src do img
  img.src = urlBase + codigoPais + "/shiny/64.png";

  // Atribui o nome do país como o atributo alt do img
  img.alt = selectPais.options[selectPais.selectedIndex].text;

  // Remove os elementos filhos do div do HTML se houver algum
  while (divBandeira.firstChild) {
    divBandeira.removeChild(divBandeira.firstChild);
  }

  // Adiciona o img ao div do HTML
  divBandeira.appendChild(img);
}

// Chama a função criarListaPaises quando a página é carregada
window.onload = criarListaPaises;

// Chama a função exibirBandeira quando o select é alterado
selectPais.onchange = exibirBandeira;
