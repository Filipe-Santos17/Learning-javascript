//Tipagem implicita = o programa pré supõe que deve ser assim, não o programador
let myName = 'Filipe'

console.log(myName)

myName = 21 //Não permite mudança no tipo de variavel
//Se a variavel começou com um tipo ele não pode ser alterado

let idade = 20

idade = "21"//Mesmo erro do de cima

let names = ['Filipe','Matheus', 20]

names.push('Saulo') //Aceita
names.push(40)//Se não houvesse o number 20 ele não aceitaria
names.push(true)//Não permite pois não nem true nem false no array

//O mesmo em objetos
let person = {
    name: 'Filipe',
    age: 20,
    isAdmin: true,
}

//Mudar o tipo de qualquer dos parametroas do objeto implica em erro

person.name = 'Filipinho'//pode, mas outro tipo não 