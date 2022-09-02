/* 7 diferentes tipos primitivos no Javascript
--String = texto padrão em js
--Number = Numeros Inteiros e reais
--Boolean = true ou false
--Undefined = 
--Symbol() = Novidade do ES6
--Object {} = Funções, Arrays, null e muitos outros
*/

//typeof = operador especial do js para indicar o tipo primitivo

var nome = "filipe";
var sobrenome = "Marques";
var idade = 20

console.log(typeof nome)
console.log(nome + sobrenome)//concatenação / soma de variaveis

var frase = nome + " " + sobrenome + " tem " + idade + " anos"
var frase2 = ` ${nome} ${sobrenome} tem ${idade} anos`//template string
//dentro de ${} é valido expressões e variaveis js
console.log(frase)
console.log(frase2)
console.log(typeof frase)//se unir um Number a uma string o resultado é uma String


// Declare uma variável contendo uma string
var variavel = "meu nome é "
console.log(variavel)

// Declare uma variável contendo um número dentro de uma string
var outraVariavel = 20 + " anos idade"

// Declare uma variável com a sua idade
var idade = 20

// Declare duas variáveis, uma com seu nome
var nome = "Filipe"

// e outra com seu sobrenome e some as mesmas
var sobrenome = " Marques"

console.log(nome + sobrenome)
console.log(`${nome}${sobrenome}`)
// Coloque a seguinte frase em uma variável: It's time
var frase = "it's time" //aspas ' não pode ficar entre ''

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome)