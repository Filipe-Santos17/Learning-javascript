//Números
var NormalNumber = 20

var NumberWithZero = 2e10 // valor + e + numero de zeros que deseja colocar no final
var NumberWithZeroMenos = 2e-2//
//precisão de até 15 digitos

var pi = 3.14 //Numeros decimais utilizam .

//Operadores Aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//OPERADORES ARITMÉTICOS (STRINGS)
var soma = '100' + 50; // 10050 - continua uma string
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var multiplicacao = '100' / '2'; // 50
var divisao = 'Comprei 10' / 2; // NaN (Not a Number) 

//Operadores de Incremento Unario
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
console.log(typeof idade)//string
+idade; // 28 (número) - espaços vazios é aceitavel mas acentuação e letras não
console.log(typeof +idade)//Number
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1



// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN
let valor = "frase8" / 2
console.log(typeof(+valor))
console.log(valor)

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' +50
console.log(soma)

// Incremente o número 5 e retorne o seu valor incrementado

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

//meu jeito
console.log(peso.replace('kg','')/2)

//jeito do origamid
var numero = '80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

console.log(peso)