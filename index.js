/* Construa um algoritmo que solicita ao usuário
   dois números e exiba qual deles é o maior.
*/

// Importação da biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Declaração de variáveis
let num1 = parseFloat(prompt('Digite o primeiro número: '));
let num2 = parseFloat(prompt('Digite o segundo número: '));

// Comparando os números
if (num1 > num2) {
    console.log(`O maior número é ${num1}`);
} else if (num2 > num1) {
    console.log(`O maior número é ${num2}`);
} else {
    console.log('Os números são iguais');
}