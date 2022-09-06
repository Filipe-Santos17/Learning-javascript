/* Seleção de Elementos */

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');// Retorna null caso o elemento não exista no DOM
console.log(animaisSection.innerText)

// Seleciona pela classe, retorna uma HTMLCollection, que é uma ArrayLike
const gridSection = document.getElementsByClassName('grid-section');//classe grid-section
const contatoEGrid = document.getElementsByClassName('grid-section contato');//classe grid-section e classe contato

// Seleciona todas as UL's, retorna uma HTMLCollection também
const ul = document.getElementsByTagName('ul');
console.log(gridSection[0]);// Retorna o primeiro elemento

//querySelector - retorna o primeiro elemento que combinar com o seu seletor CSS.
//querySelectorAll - retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
//Seleciona os items como se fosse no css - é o metodo mais usado atualmente 
const animais = document.querySelector('.animais');//Seleciona pela classe
const contato = document.querySelector('#contato');//Seleciona pelo Id
const ultimoItem = document.querySelector('.animais-lista li:last-child');//Está fazendo um breadcrumb que nem no Css
const linkCSS = document.querySelector('[href^="https://"]');//Toda tag que tem o atributo href e que começar com https:// 
//ex: a href="https://"
const primeiroUl = document.querySelector('ul');//Seleciona a primeira tag ul
const TodosUl = document.querySelectorAll('ul');//Seleciona todas as tag ul

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li'); //Seleção especifica, assim apenas li dentro da primeira Ul é selecionada

const linksInternos = document.querySelectorAll(`[href^="#"]`)//Todos os links que tem href começando com #
console.log(linksInternos)

//NodeList vs HTMLCollection
//NodeList possui o metodo forEach, 'para cada filho' que renderiza cada item, forEach apenas pode ser feito em uma NodeList 
//HTMLCollection é ao vivo, ou seja se um item for adicionado dinamicamente ele renderiza e aumenta o ArrayLike
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

//NodeList e HTMLCollection são arraysLike, ambos não são Arrays de verdade

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

console.log(gridSectionHTML[0]); //No console, ambos são exibidos da mesma forma
console.log(gridSectionNode[0]); //No console, ambos são exibidos da mesma forma

gridSectionNode.forEach(item => { //Vantagem da NodeList é justamente o ForEach
    console.log(item)
})

const ArrayGridNode = Array.from(gridSectionNode)//Transforma em array de Verdade
const ArrayGridHTML = Array.from(gridSectionHTML)//Transforma em array de Verdade

ArrayGridHTML.forEach(item => { //Agora o HTMLCollection aceita forEach
    console.log(`${item} do Html Collection`)
})

//Exercicios
// Retorne no console todas as imagens do site
const ImagensDoSite = document.querySelectorAll("img")
console.log(ImagensDoSite)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const ImagensDoSiteImagem = document.querySelectorAll(`img[src^="img/imagem"]`)
console.log(ImagensDoSiteImagem)

// Selecione todos os links internos (onde o href começa com #)
const LinksInt = document.querySelectorAll(`a[href^="#"]`)//dica: deixe sempre o atributo [] colado na tag
console.log(LinksInt)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2P = document.querySelector(".animais-descricao h2")
console.log(h2P)

// Selecione o último p do site
const P = document.querySelectorAll("p")
const ultimoP = P[P.length - 1]// ou P[--P.length]
console.log(ultimoP)
