/*

Cálculo IMC

IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

- Abaixo de 18.5 - abaixo do peso;
- Entre 18.5 e 25 - peso normal;
- Entre 25 e 30 - acima do peso;
- Entre 30 e 40 - obeso;
- Acima de 40 - obesidade grave;

*/

let peso = 83;
let altura = 1.83;
const imc = (peso / (altura * altura)).toFixed(2);

if (imc >= 0 && imc < 18.5) {
    console.log(`Seu IMC é de ${imc}, isso indica que você está abaixo do peso ideal.`)
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é de ${imc}, isso indica que você está com o peso ideal.`)
} else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC é de ${imc}, isso indica que você está acima do peso ideal.`)
} else if (imc >= 30 && imc < 40) {
    console.log(`Seu IMC é de ${imc}, isso indica que você está com obesidade.`)
} else if (imc >= 40) {
    console.log(`Seu IMC é de ${imc}, isso indica que você está com obesidade mórbida.`)
} else {
    console.log('Dados informados inválidos.')
}