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

const sacar = () => {
}
const depositar = () => {
}
const consultarSaldo = () => {
}

const efetuarOperacao = (evento) =>{
    evento.preventDefault()

    switch(evento.target.operacao.value){
        case 'SAQUE':
            sacar()
            break;
        case 'DEPOSITO':
            depositar()
            break;
        case 'SALDO':
            consultarSaldo()
            break;
        default:
            alert('Operacao invalida!')
    }
}


const operacao = document.getElementById('operacao')
operacao.addEventListener('change', trocaOperacao)

const formAcoes = document.getElementById('form-acoes')
formAcoes.addEventListener('submit', trocaOperacao)