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


//Manipulando Elementos
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista


//CreateElement - Cria um novo elemento sem contéudo mas não insere automaticamente no DOM
const animaisCreate = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animaisCreate.appendChild(novoH1);

//Clonar Elementos
const clone = lista.cloneNode(true)//param true indica que o elemento deve ser clonado com os seus filhos

// Exercicios
// Duplique o menu e adicione ele em copy
const MenuExer = document.querySelector(".menu")
const CopyExer = document.querySelector(".copy")

const CloneMenu = MenuExer.cloneNode(true)
CopyExer.appendChild(CloneMenu)//Insere na ultima linha

// Selecione o primeiro DT da dl de Faq
const FaqExer = document.querySelector("#faq")
const DlExer = FaqExer.querySelector("dl")

const DtFirst = DlExer.children[0]
console.log(DtFirst)

// Selecione o DD referente ao primeiro DT
const DdFirst = DtFirst.nextElementSibling
console.log(DdFirst)

// Substitua o conteúdo html de .faq pelo de .animais
const animaisExer = document.querySelector('.animais');
FaqExer.innerHTML = animaisExer.innerHTML