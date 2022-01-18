class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = 'corrente'
    this._saldo = 0
  }

  get saldo() {
    return this._saldo
  }

  set saldo(valor) {
    this._saldo = valor
  }

  depositar(valor) {
    this._saldo = this._saldo + valor
  }

  sacar(valor) {
    if (this._saldo > valor) {
      this._saldo = this._saldo - valor
    }

    return 'Saldo insuficiente'
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, CartaoCredito) {
    super(agencia, numero)
    this._CartaoCredito = CartaoCredito
  }

  get CartaoCredito() {
    return this.CartaoCredito
  }

  set CartaoCredito(valor) {
    this._CartaoCredito = this._CartaoCredito + valor
  }

  depositar(valor) {
    this._saldo = this._saldo + valor
  }

  sacar(valor) {
    if (this._saldo > valor) {
      this._saldo = this._saldo - valor
      return 'Saque efetuado'
    } else {
      return 'Saldo insuficiente'
    }
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'poupanca'
  }

  depositar(valor) {
    this._saldo = this._saldo + valor
  }

  sacar(valor) {
    if (this._saldo > valor) {
      this._saldo = this._saldo - valor
      return 'Saque efetuado'
    } else {
      return 'Saldo insuficiente'
    }
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'universitaria'
  }

  sacar(valor) {
    if (valor > 500) {
      return 'Operação Inválida'
    } else {
      this._saldo = this._saldo - valor
      return 'Saque efetuado'
    }
  }
}
