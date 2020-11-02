console.log("\nTrabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe, while");
    destinoExiste = true;
    break;
  }
  contador++;
}

for (let index = 0; index < listaDeDestinos.length; index++) {
  const element = listaDeDestinos[index];
  if (element == destino) {
    console.log("Destino existe, for");
    destinoExiste = true;
  }
}

listaDeDestinos.forEach((destinos) => {
  if (destinos == destino) {
    console.log("Destino existe, loop foreach");
    destinoExiste = true;
  }
});

console.log("Destino existe: ", destinoExiste == true ? "sim" : "não");
