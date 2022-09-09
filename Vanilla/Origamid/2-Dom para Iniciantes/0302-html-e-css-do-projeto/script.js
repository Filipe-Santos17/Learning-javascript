//Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
const menu = document.querySelector('.menu');

console.log(menu.outerHTML); // todo o html do elemento, pai + filho
console.log(menu.innerHTML); // html interno, tudo dentro da tag html
console.log(menu.innerText); // texto, sem tags,

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada, e substitui o que tem no DOM

//TRASVERSING - Como navegar pelo DOM, utilizando suas propriedades e métodos.
const animais = document.querySelector(".animais-lista")
console.log(animais.parentElement)//Elemento pai / Tag que está acima dele / Tag que contém o elemento
console.log(animais.parentElement.parentElement)//Elemento pai do pai

const ListaLi = document.querySelector(".animais-lista")
console.log(ListaLi.children)//Todos os elementos em uma HTMLCollection
console.log(ListaLi.children[0])//Primeiro filho do elemento 
console.log(ListaLi.children[--ListaLi.children.length])//Ultimo filho do elemento 
console.log(ListaLi.querySelector("li:last-child"))//Mesmo valor do de cima


console.log(ListaLi.previousElementSibling); // elemento acima
console.log(ListaLi.nextElementSibling) // elemento abaixo
console.log(ListaLi.previousSibling); // node acima ou valor que vem antes da tag

console.log(ListaLi.firstChild); // primeiro node child - pode puxar um comentário, elemento, qualquer coisa
console.log(ListaLi.childNodes); // todos os node child


