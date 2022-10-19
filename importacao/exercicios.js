const {gets, print} = require('./funcoes-auxiliares');


maior = 0;
lista = gets()

for (i = 0; i < lista.length; i++) {
    if (lista[i] > maior) {
        maior = lista[i]
    }
}



print(maior);