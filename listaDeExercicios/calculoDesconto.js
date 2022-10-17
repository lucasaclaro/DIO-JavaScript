/*

Condições de pagamento:

- à vista no débito - 10% de desconto;
- à vista no dinheiro ou PIX - 15% de desconto;
- em duas vezes - preço normal sem juros;
- mais de duas vezes - juros de 10%


*/



let preco = 89.99
const aVista = (preco - ((preco  * 10) / 100 )).toFixed(2)
const dinheiroPix = (preco - ((preco * 15) / 100)).toFixed(2)
const maisDuasVezes = (preco + ((preco * 10) / 100)).toFixed(2)
const formaDePagamento = 1

console.log('Condições de pagamento: Opção 1 - à vista no débito - 10% de desconto; Opção 2 - à vista no dinheiro ou PIX - 15% de desconto; Opção 3 - em duas vezes - preço normal sem juros; Opção 4 - mais de duas vezes - juros de 10%')

if (formaDePagamento === 1 ) {
    console.log(`O valor original do produto é R$${preco}, com a forma de pagamento escolhida ela sai por R$${aVista}.`)
} else if (formaDePagamento === 2) {
    console.log(`O valor original do produto é R$${preco}, com a forma de pagamento escolhida ela sai por R$${dinheiroPix}.`)
} else if (formaDePagamento === 3) {
    console.log(`O valor original do produto é R$${preco}, com a forma de pagamento escolhida ela sai por R$${preco}.`)
} else if (formaDePagamento === 4) {
    console.log(`O valor original do produto é R$${preco}, com a forma de pagamento escolhida ela sai por R$${maisDuasVezes}.`)
} else {
    console.log('Opção selecionada inválida.')
}