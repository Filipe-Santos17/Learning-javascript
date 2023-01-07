//O Prototype é uma propriedade adicionada por padrão a toda função assim que for criada
//Todos os metodos padrões ficam dentro do prototype, ex: pop, push, //Nota, lembrando que os metodos de uma NodeList são diferentes de array e HtmlCollection

function Pessoa(nome, idade) { //Essa é uma função
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('Filipe', 28); //Esse é um objeto

console.log(Pessoa.prototype); // retorna o objeto, é uma função
console.log(andre.prototype); // undefined, significa que é um objeto

//É possivel adicionar metodos ao prototype
Pessoa.prototype.andou = function(){
  return this.nome + ' andou'
}//Esse metodo não irá aparecer no objeto, mas dentro de __proto__ 
//Ele ainda pode ser executado mesmo sendo prototype

const Filipe = new Pessoa('Filipe',20)

console.log(Pessoa)
console.log(Pessoa.prototype)
console.log(Filipe)
console.log(Filipe.prototype)//Undefined
//console.log(Filipe.prototype.andou)
//console.log(Filipe.prototype.andou())
Filipe.prototype.andou()//Undefined

const nodelist = document.querySelectorAll("li")

//Transforma NodeList e HtmlCollection em Array
const newArrayList = Array.prototype.slice.call(nodelist)