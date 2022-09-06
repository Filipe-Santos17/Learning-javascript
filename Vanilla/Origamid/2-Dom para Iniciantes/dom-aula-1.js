//DOM - Document Object Model - É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);// window é o objeto global do browser, ou seja tudo está dentro dele
//Por ser global nem sempre precisa ser chamado, pois já fica explicito seu uso


//Window e Document - São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

//Element possui uma serie de metodos uteis 
const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

function callback(){
    console.log("clicou")
}

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo


// Retorne o url da página atual utilizando o objeto window
const href = window.location.href
console.log(href)
// Seleciona o primeiro elemento da página que possua a classe ativo
const ativo = document.querySelector('.ativo');
console.log(ativo)

// Retorne a linguagem do navegador
const langNavegador = window.navigator.language
console.log(langNavegador)

// Retorne a largura da janela 
const width = screen.width// Ambos sem o window - podia ser innerWidth
const height = screen.height// Ambos sem o window
console.log(width)
console.log(height)
