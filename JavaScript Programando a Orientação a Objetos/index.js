class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  #agencia;
  #saldo;

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 123123322;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.saldo = 0;
contaCorrente1.agencia = 1001;
contaCorrente1.depositar(100);
contaCorrente1.sacar(50);
 
console.log(contaCorrente1);