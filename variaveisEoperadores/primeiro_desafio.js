/*
Faça um programa para calcular o valor de uma viagem.

- preço do combustível;
- valor médio de gasto do carro;
- distância em KM da viagem;

Qual o valor do combustível gasto para realizar essa viagem?
*/

let precoCombustivel = 5.79;
let consumoPorLitro = 12;
let distancia = 1580;

const valorViagem = (distancia / consumoPorLitro) * precoCombustivel;

console.log('O valor gasto será de R$' + valorViagem.toFixed(2) + '.')



