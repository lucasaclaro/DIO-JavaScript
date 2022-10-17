/*

Faça um algoritimo que dado as 3 notas tiradas de um aluno em um semestre da faculdade calcule e imprima a sua média e classificação conforme a tabela abaixo:

Media = (nota1 + nota2 +nota3) / 3

Classificação:

- menor que 5 = reprovação;
- entre 5 e 7 = recuperação;
- maior que 7 = aprovação;

*/

let notaUm = 9;
let notaDois = 8;
let notaTres = 9.5;
const media = ((notaUm + notaDois + notaTres) / 3).toFixed(1);

if (media >= 0 && media < 5) {
    console.log(`Sua média foi ${media}, e o resultado do semestre é que você está reprovado!`);
} else if (media >= 5 && media < 7) {
    console.log(`Sua média foi de ${media}, e o resultado do semestre é que vocês está de recuperação`)
} else if (media >= 7) {
    console.log(`Sua média foi de ${media}, e o resultado do semestre é que você foi aprovado!`)
} else {
    console.log('Dados informados inválidos. Verifique as notas digitadas.')
}



