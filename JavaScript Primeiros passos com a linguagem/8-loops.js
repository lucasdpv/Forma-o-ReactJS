console.log("\nTrabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Fortaleza";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe");
    destinoExiste = true;
    break;
  }
  contador++;
}

console.log("Destino existe: ", destinoExiste == true ? 'sim':'não');
