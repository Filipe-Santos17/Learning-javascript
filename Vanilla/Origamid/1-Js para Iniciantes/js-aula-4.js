//Bollean = verificar condições e valores especifícos

//Condicional simples
if(true){
    //ação a ser feita
} else{
    //ação caso a condição for falsa
}

//Condicional complexa
const possuiEnsinoMedio = true
const possuiGraduacao = true
const possuiDoutorado = false

if(possuiDoutorado){
    console.log("")
} else if (possuiGraduacao){
    console.log("")
}


// Valores que dão falsos
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('')// ou "" ou ``

// Valores que dão verdadeiros
if(true)
if(1)// qualquer numero exceto 0
if(' ')///
if('andre')
if(-5)
if({})

// Operadores de negação
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
//Se colocar !! a negação nega a negação e vira verdadeiro

//Comparação
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true


//Operador Logico E / && = Apenas segue se ambos forem verdadeiros
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true




// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 20
var idadeMae = 40

if(minhaIdade > idadeMae){
    console.log("menor")
} else if(minhaIdade === idadeMae){
    console.log("Igual")
} else {
    console.log("maior")
}


// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorados = false; //false
var empregoFuturo; //como  não é atribuido valor se torna undefined e é falso
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}