/* forEach e Arrow Function */
//forEach = metodo para selecionar e interagir com uma lista de items do elemento dom
//Deve receber uma função de callback
//1º param = item do elemento
//2º param = numero do item no array, começando em 0
//3º param = array completo de items

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

//Em caso de receber um HTMLCollection transforme em Array

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});


//Arrow Function - encurta a sintaxe
imgs.forEach((item, index, array) => {
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

// parâmetro único não precisa de parênteses
//ex: imgs.forEach(item => console.log(item)) //Não pode ter ; dentro do forEach nesse caso

// multiplos parâmetros precisam de parênteses
//imgs.forEach((item, index) => {console.log(item, index);});

// sem parâmetro precisa dos parênteses, mesmo vazio


//Exe
// Mostre no console cada parágrado do site
const parag = document.querySelectorAll("p")
parag.forEach( p => console.log(p))

// Mostre o texto dos parágrafos no console
parag.forEach(p => console.log(p.innerText))

// Como corrigir os erros abaixo:
const images = document.querySelectorAll('img');

imgs.forEach((item, index) => { //Faltava colocar item,index entre ()
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => { //Faltava colocar ()
  console.log(i++);
});

imgs.forEach(() => i++);

