let precoGasolina = 5.79;
let precoAlcool = 3.29;
let combustivelVeiculo = 'alcool'
let kmPorLitro = 10;
let distanciaEmKm = 100;

if (combustivelVeiculo === 'gasolina') {
    let precoViagem = (distanciaEmKm / kmPorLitro) * precoGasolina;
    
    console.log('O gasto total da viagem foi de R$' + precoViagem.toFixed(2) + '.');
} else if (combustivelVeiculo === 'alcool') {
    let precoViagem = (distanciaEmKm / kmPorLitro) * precoAlcool;

    console.log('O gasto total da viagem foi de R$' + precoViagem.toFixed(2) + '.')
}
