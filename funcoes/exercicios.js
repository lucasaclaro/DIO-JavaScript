function escreverNome(nome) {
    return 'Meu nome é ' + nome;
}


function verificarMaioridade (nome, idade) {
    if (idade < 17) {
        return escreverNome(nome) + ', tenho ' + idade + ' anos, e isso indica que você é menor de idade.'
    } else if (idade >= 18) {
        return escreverNome(nome) + ',tenho ' + idade + ' anos, e isso indica que você é maior de idade.'
    } else {
        return 'Dados inválidos.'
    }

}


function escolherFormaDePagamento (preco, opcao) {
    if (opcao === 1) {
        const aVista = (preco - ((preco  * 10) / 100 )).toFixed(2)
        return `O valor original do produto é R$${preco}, com a forma de pagamento escolhida ela sai por R$${aVista}.`
    } else if (opcao === 2) {
        const dinheiroPix = (preco - ((preco * 15) / 100)).toFixed(2)
        return `O valor original do produto é R$${preco}, com a forma de pagamento escolhida ela sai por R$${dinheiroPix}.`
    } else if (opcao === 3) {
        return `O valor original do produto é R$${preco}, com a forma de pagamento escolhida ela sai por R$${preco}.`
    } else if (opcao === 4) {
        const maisDuasVezes = (preco + ((preco * 10) / 100)).toFixed(2)
        return `O valor original do produto é R$${preco}, com a forma de pagamento escolhida ela sai por R$${maisDuasVezes}.`

    }
}


function calcularMedia (n1, n2) {
    const media = (n1 + n2) / 2
}

console.log(calcularMedia(5, 5))