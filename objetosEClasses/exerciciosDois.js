class Pessoa {
    nome;
    altura;
    peso;

    constructor (nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC () {

    const imc = (this.peso / (this.altura * this.altura)).toFixed(2)


    if (imc >= 0 && imc < 18.5) {
        return `Seu IMC é de ${imc}, isso indica que você está abaixo do peso ideal.`
    } else if (imc >= 18.5 && imc < 25) {
        return `Seu IMC é de ${imc}, isso indica que você está com o peso ideal.`
    } else if (imc >= 25 && imc < 30) {
       return `Seu IMC é de ${imc}, isso indica que você está acima do peso ideal.`
    } else if (imc >= 30 && imc < 40) {
        return `Seu IMC é de ${imc}, isso indica que você está com obesidade.`
    } else if (imc >= 40) {
        return `Seu IMC é de ${imc}, isso indica que você está com obesidade mórbida.`
    } else {
        return 'Dados informados inválidos.'
    }

    }
    

}

jose = new Pessoa('José', 1.75, 70)

console.log(jose)
console.log(jose.calcularIMC())