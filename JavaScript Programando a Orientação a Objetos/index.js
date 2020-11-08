import { ContaCorrente } from  "./ContaCorrente.js"
import { Cliente } from "./Cliente.js"

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 123123322;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
contaCorrente1.depositar(100);
contaCorrente1.sacar(50);

console.log(contaCorrente1.getSaldo());
