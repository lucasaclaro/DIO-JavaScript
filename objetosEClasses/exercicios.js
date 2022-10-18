/*

Crie uma classe para representar carros.
Os carros possuem marca, cor, e um gasto médio de combustível por quilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

*/


class Carro {
    marca;
    cor;
    consumoPorLitro;


    constructor (marca, cor, consumoPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.consumoPorLitro = consumoPorLitro;
        
    }



    calcularValorViagem (distancia, preco) {
       return ((distancia / this.consumoPorLitro) * preco).toFixed(2);
     
    }

}

const gol = new Carro('Volkswagen', 'branco', 12);

console.log(gol.calcularValorViagem(70, 5))
