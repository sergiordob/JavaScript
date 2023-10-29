const cepInput = document.getElementById("cep");

cepInput.addEventListener("input", function () {
  const cepValue = cepInput.value;
  // console.log("CEP digitado: " + cepValue);

  const cepPattern = /^[0-9]{8}$/;

  if (cepPattern.test(cepValue)) {
    cepError.classList.add("hidden");

    const apiUrl = `https://viacep.com.br/ws/${cepValue}/json/`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados do CEP:", data);

        document.getElementById("street").value = data.logradouro;
        document.getElementById("neighborhood").value = data.bairro;
        document.getElementById("state").value = data.uf;
        document.getElementById("city").value = data.localidade;
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição: " + error);
      });
  } else {
    const cepError = document.getElementById("cepError");
    cepError.classList.remove("hidden");
  }
});
