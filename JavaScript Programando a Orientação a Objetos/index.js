class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 123123322;


const cliente2 = new Cliente();
cliente2.nome = "Stephanie";
cliente2.cpf = 123123321;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.saldo = 0;
contaCorrente1.agencia = 1001;

console.log(cliente1);
console.log(cliente2);
