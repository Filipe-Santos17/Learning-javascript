
/*
--Use o Live Server

<script src=""></script> // Importação do arquivo js dentro da pagína html
*/

//Variaveis = responsavel por guardar o contéudo na memoria do computador, em js existe 3 tipos: var, let e const
//A ideia é sempre evitar repetições - DRY(Dont Repeat Yourdelf)
var nome = "Filipe", //js permite evitar repetir o sinalizador de variavel
idade = 20,
EstaEstudando = true;

console.log(nome, idade, EstaEstudando)

/*Toda variavel
-É casesensitive = letra em caixas diferentes altera o contéudo
-Não pode usar palavras reservadas = dar erro, obvio
-Pode começar com $, _ ou letras em Geral = não tem problema
-Não pode começar com numeros ou outros caracteres especiais
*/

//comentario de uma linha
/**
 * comentario de multiplas linhas
*/

//Hosting = o programa primeiro declara a variavel para depois atribuir um valor a ela, ex:
console.log(carro)
var carro = "Corsa" //O console.log responde undefined, pois a variavel existe, mas o programa ainda não a reconheceu

