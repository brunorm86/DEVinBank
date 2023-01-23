let contasClientes = [];

const validarSenhasIguais = (evento) => {
    if (evento.target.senha.value === evento.target.confirmacao.value) {
        console.log('teste');
        return true;
    }
    return false;
};

const cadastrarConta = (evento) => {

    evento.preventDefault();

    if (validarSenhasIguais(evento)) {
        const conta = {
            nome: evento.target.nome.value,
            cpf: evento.target.cpf.value,
            celular: evento.target.celular.value,
            senha: evento.target.senha.value,
            conta: Math.floor(1000 + Math.random() * 900000),
            saldo: 0
        };

        contasClientes.push(conta);
        alert(`conta criada com sucesso! Conta num: ${conta.conta}`)

    } else {
        alert('Senhas nao conferem!')
    }
};

const form = document.getElementById('form');
form.addEventListener('submit', cadastrarConta);

//operacoes

const trocaOperacao = (evento) => {
    const valor = document.getElementById('valor')
    valor.disabled = evento.target.value === 'SALDO';

}

const obterConta = (conta) => {
    return contasClientes.find((c) => c.conta === conta)
}
const sacar = (conta, valor) => {
    const contaCliente = obterConta(conta)
    let saldoSimulado = contaCliente.saldo - valor
    if (validarValor(saldoSimulado)) {
        contaCliente.saldo -= valor
        alert("Novo saldo: " + contaCliente.saldo)
    } else {
        alert("Saldo insuficiente!")
    }

}
const depositar = (conta, valor) => {
    if (validarValor(valor)) {
        const contaCliente = obterConta(conta)

        contaCliente.saldo += valor

        console.log(contasClientes)

        alert("Deposito efetuado com sucesso! " + contaCliente.saldo)
    } else {
        alert("Valor invalido!")
    }
}
const consultarSaldo = (conta) => {
    const contaCliente = obterConta(conta)
    alert("Saldo atual: " + contaCliente.saldo)
}

const validarValor = (valor) => {
    if (!isNaN(valor) && valor > 0) {
        return true
    }
    return false
}
const validarConta = (conta, senha) => {
    const contaCliente = obterConta(conta)

    return contaCliente && contaCliente.senha === senha ? true : false;

};
const efetuarOperacao = (evento) => {

    const conta = parseInt(evento.target.conta.value)
    const senha = evento.target.senhaop.value
    const valor = parseInt(evento.target.valor.value)
    evento.preventDefault()

    const contaValida = validarConta(conta, senha)
    if (contaValida) {
        switch (evento.target.operacao.value) {
            case 'SAQUE':
                sacar(conta, valor)
                break;
            case 'DEPOSITO':
                depositar(conta, valor)
                break;
            case 'SALDO':
                consultarSaldo(conta)
                break;
            default:
                alert('Operacao invalida!')
        }

    } else {
        alert("Conta ou senha invalida(s)")
    }

}


const operacao = document.getElementById('operacao')
operacao.addEventListener('change', trocaOperacao)

const formAcoes = document.getElementById('form-acoes')
formAcoes.addEventListener('submit', efetuarOperacao)