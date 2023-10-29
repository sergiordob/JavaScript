let selectPais = document.getElementById("select-pais");

let divBandeira = document.getElementById("div-bandeira");

let urlBase = "https://flagsapi.com/";

function criarListaPaises() {
  let listaPaises = [
    { codigo: "AD", nome: "Andorra" },
    { codigo: "AE", nome: "Emirados Árabes Unidos" },
    { codigo: "AF", nome: "Afeganistão" },
  ];

  for (let pais of listaPaises) {
    let option = document.createElement("option");

    option.value = pais.codigo;

    option.textContent = pais.nome;

    selectPais.appendChild(option);
  }
}

function exibirBandeira() {
  let codigoPais = selectPais.value;

  let img = document.createElement("img");

  img.src = urlBase + codigoPais + "/shiny/64.png";

  img.alt = selectPais.options[selectPais.selectedIndex].text;

  while (divBandeira.firstChild) {
    divBandeira.removeChild(divBandeira.firstChild);
  }

  divBandeira.appendChild(img);
}

window.onload = criarListaPaises;

selectPais.onchange = exibirBandeira;
