//ADDEVENTLISTENER - Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options) 3º param é opcional
//1º - EVENT = O primeiro parâmetro do callback é referente ao tipo do evento que ocorreu.
//2º - Function =
img.addEventListener('click', function() {
  console.log('Clicou');
})

//É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

function callback(){
    console.log("Alguma ação de clique")
}

img.addEventListener('click', callback); // 🚀 - Boa pratíca
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() { //Função anonima
  console.log('Clicou');
})
img.addEventListener('click', () => { //Arrow Function
  console.log('Clicou');
})


const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this - pega todo o elemento selecionado
  const target = event.target; // onde o clique ocorreu especificamente
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

//EVENT.PREVENTDEFAULT - Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

//No evento, this e currentTarget são a mesma coisa

function callback(event) {
  console.log(this); // retorna a imagem
  //console.log(this.getAttribute('src'));//também retorna a imagem - mesmo valor
}

img.addEventListener('click', callback);


//Leia a Documentação da Mozilla para aprender mais sobre eventos e tome cuidado com eventos que são disparados muitas vezes, pois isso atrapalha a perfomance

// window.addEventListener()//Evento geral adicionado ao body

//click - clicou no item
//keydown - apertou em qualquer tecla do teclado
//resize - alterou a largura da tela
//scroll - movimenta a pagína pelo scroll
//mousemove - 
//mouseenter


//Conveniente criar um event.Key para alterar a tela pelo teclado
function handleKeyboard(event) {
    if(event.key === 'a')
      document.body.classList.toggle('azul');
    else if(event.key === 'v')
      document.body.classList.toggle('vermelho');
  }
  
window.addEventListener('keydown', handleKeyboard);

//For Each e EventListener
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

//Exer
// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const linksInt = document.querySelectorAll(`a[href^="#"]`)

function toogleClass(e){
  e.preventDefault()
  linksInt.forEach(link => {
    link.classList.remove("ativo")
  })
  e.currentTarget.classList.add("ativo")
}

linksInt.forEach( item => item.addEventListener("click", toogleClass))

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const TodosElementos = document.querySelectorAll("*")

TodosElementos.forEach(item => {
  item.addEventListener('click', e => {
    console.log(e.currentTarget)
  })
})

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
TodosElementos.forEach(item => {
  item.addEventListener('click', e => {
    e.currentTarget.remove()
  })
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
window.addEventListener('keydown', e => {
  if(e.key === "t"){
    document.documentElement.classList.toggle("textoMaior")//Classe que deve existir no css
    //documentElement = html
    //documentBody = body
  }
})