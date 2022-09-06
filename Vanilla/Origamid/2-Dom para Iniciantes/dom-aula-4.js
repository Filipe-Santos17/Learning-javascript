/* Classes e Atributos */

//classList - Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo'); //adiciona 1 classe
menu.classList.add('ativo', 'mobile'); //adiciona + de 1 classe
menu.classList.remove('ativo'); //elimina a classe
menu.classList.toggle('ativo'); // adiciona se não tiver e remove se tiver a classe
menu.classList.contains('ativo'); // true ou false - contém ou não contém a classe
menu.classList.replace('ativo', 'inativo'); //troca a primeira pela classe pela ultima

console.log(menu.classList)//Cria um arrayLike com as classes

//Metodo antigo 
console.log(menu.className)//Exibe as classes na forma de string
//ex: menu mobile inativo (resultado do console acimma)
menu.className = 'NovaClasse OutraNovaClasse' //adiciona uma classe - o problema é que desse jeito apaga as outras classes que já existe / sobrescreve as classes
menu.className += ' outroMetodo menu' // outra forma de também adicionar uma classe - só que assim não apaga as que já tem
console.log(menu.className)

//attributes - retorna uma array like com todos os attributos da tag, como classe, id, data- entre outros - lembrando que atributo é aquilo que está escrito dentro da tag
console.log(menu.attributes)

//GETATTRIBUTE E SETATTRIBUTE - Métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');

const get = img.getAttribute('src'); // get = pega valor do src
img.setAttribute('alt', 'Texto Alternativo'); // o primeiro parametro é o atributo e o segundo é o valor que ele irá receber - cuidado para não passar valores errados
img.hasAttribute('id'); // true / false = tem ou não tem esses atributo
img.hasAttributes(); // true / false se tem algum atributo
img.removeAttribute('alt'); // remove o alt

//Read Only
const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

//Leia no Mdn - Element Object

//Ex:
// Adicione a classe ativo a todos os itens do menu
const novoMenu = document.querySelectorAll(".menu a")
novoMenu.forEach(item => item.classList.add("ativo"))//ou item.className = 'ativo'

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
novoMenu.forEach((item,index)=> {
  if (index === 0) return //meu jeito
  item.classList.remove("ativo")
})

novoMenu[0].classList.add("ativo")//Jeito do origamid

// Verifique se as imagens possuem o atributo alt
const Imga = document.querySelectorAll("img") 
Imga.forEach(item => console.log(item,item.hasAttribute("alt")))  

// Modifique o href do link externo no menu
const linkExt = document.querySelector(`a[href^="https://"]`)
linkExt.setAttribute('href','externo')
console.log(linkExt)

