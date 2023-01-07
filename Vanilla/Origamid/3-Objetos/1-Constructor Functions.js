const carro = { //Objeto é uma variavel que possui chaves {} ou uma função também
  marca: 'Marca',
  preco: 0
}

const honda = carro //Forma errada de atribuição
honda.marca = 'honda'
honda.preco = 3000

const fiat = carro
fiat.marca = 'fiat'
fiat.preco = 2000

console.log(carro) //Forma errada, pois muda o objeto e não recria ela
console.log(honda) //
console.log(fiat) //Tudo vira fiat

//constructor function = funções responsáveis por construir novos objetos

function Carro(){} //função = objeto que está vazio

const Honda2 = new Carro()

Honda2.teste = function() {
 console.log("oi")
}

Honda2.teste() //escreve oi

//Forma certa de escrever objs
function Carro2(minhaMarca, meuPreco){
  //this sempre faz referência ao objeto
  this.marca = minhaMarca
  this.preco = meuPreco
}

//A palavra 'new' cria um novo objeto baseado na função que é passada para ela e possui as seguintes etapas
const ford = new Carro2()

//1º Cria um novo objeto
ford = {}

//2º Define o protótipo = herdar propriedades
ford.prototype = Carro2.prototype

//3º Aponta a variável this para o objeto
this = ford

//4º Executa a função substituindo this pelo objeto
ford.marca = 'Marca'
ford.preco = 0

//5º Retorna um novo objeto
return ford = {
  marca = 'Marca',
  preco = 0
}

