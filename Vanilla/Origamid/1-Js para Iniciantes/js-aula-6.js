//Objetos = conjuntos de variáveis e funções que são propriedades e metodos respectivamente
var eu = {
    nome: 'Filipe',
}

console.log(eu.nome); // 'Filipe'
//Metodo  =  propriedade que possui uma função no local do seu valor.

//Obj - Objetos servem para organizar o código em pequenas partes reutilizáveis.
//Tudo é objeto - pois tudo em js possui propriedades e metodos
//Até o console.log é um metodo do obj console

//Adicionar propriedades e metodos é possivel
var menu = {
    width: 1080
}

menu.heigth = 720//Adicionado, se já existir ele substitui
//um objeto tem acesso as variaveis e funções criadas fora dele, ou seja sem escopo
//por isso o this faz referência ao proprio objeto, ou seja o que está dentro do objeto

//um objeto sempre herda as propriedades e metodos do objeto que o criou
console.log(menu.hasOwnProperty('color'))//metodo que indica -> tem essa propriedade ? - nesse caso false

//Conhecer as proprieadades e metodos nativas é o que o torna um programador js


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
    nome: 'Filipe',
    sobrenome: 'Marques'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.writeNome = function() {
    console.log(`${this.nome} ${this.sobrenome}`)
}

pessoa.writeNome()
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  
carro.preco = 3000
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let dog = {
    raça: "Labrador",
    cor: "Preto",
    late(pessoa){
        if(pessoa === "homem"){
            console.log("Au Au")
        } else {
            console.log("")
        }
    }
}

dog.late("homem")
dog.late("mulher")

  
  