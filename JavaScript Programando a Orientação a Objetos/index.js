import { ContaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 123123322;

const cliente2 = new Cliente();
cliente2.nome = "Stephanie";
cliente2.cpf = 123123311;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.cliente = cliente1;
contaCorrente1.agencia = 1001;
contaCorrente1.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;
console.log(contaCorrente1.getSaldo());
console.log(conta2.getSaldo());

contaCorrente1.transferir(200, conta2);

console.log(contaCorrente1.getSaldo());
console.log(conta2.getSaldo());
