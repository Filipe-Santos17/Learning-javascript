//Tudo é Objeto

var nome = "Filipe"

//Apesar de ser apenas uma String a variavel possui propriedades e metodos
console.log(nome.length)//6
console.log(nome.toUpperCase())//FILIPE
var nomemin = nome.toLowerCase()//filipe
console.log(nomemin)

//Coerção - por um momento a variavel Number é envolvido em um objeto 
console.log(11.8.toFixed())

//Até funções possuem propriedades basicas
console.log(addEventListener.length)//Só funciona no navegador - 2(tipo de evento e função de callback)


document.querySelector('')//aceita apenas um valor que é o seletor de css do objeto
//interação com o dom ocorre atraves de metodos e propriedades
//Api da Web - pois permite interação entre codigos - objs como addEvent entre outros dão mais interatividade e simplicidade a web

// nomeie 3 propriedades ou métodos de strings
var met = "filipe"
met.length
met.toLowerCase
met.toUpperCase
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn")
/**
 * addEventListener
 * innertText
 * innerHTML
 * id
 * appendChild
*/
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
