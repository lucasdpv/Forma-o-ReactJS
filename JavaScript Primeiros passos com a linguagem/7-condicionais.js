console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const maiorDeIdade = 18;
const estaAcompanhado = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= maiorDeIdade || estaAcompanhado) {
  console.log("Comprador maior de idade...");
  listaDeDestinos.splice(1, 1); //removendo item
} else {
  console.log("Não é maior de idade e não está acompanhado...");
}

console.log(listaDeDestinos);
