
function areaCirculo(raio) {
  // A constante PI é aproximadamente 3.14159
  const PI = Math.PI;
  
  return PI * raio * raio;
}


let raio = prompt("Digite o valor do raio do círculo:");


let area = areaCirculo(raio);


alert("A área do círculo de raio " + raio + " é " + area);
