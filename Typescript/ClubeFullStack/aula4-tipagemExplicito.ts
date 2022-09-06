//Tipagem Explicita = Eu programador, afirmo o tipo da variavel

let myEndereco: string;

// console.log(myEndereco)//retorna Erro, pois a variavel está sendo usada antes de atribuida um valor e não retorna undefined como no js

myEndereco = 'Vila da folha'

let myIdade: number = 21; //Variaveis com mesmo nome em arquivos diferentes na mesma pasta do Typescript da erro

let Admin: boolean = true

Admin = false //Redeclarar let com mesmo tipo, não tem problemas

let NovoAdmin: string | boolean | Number = "Pode receber strings, numeros e booleano"

NovoAdmin = true

NovoAdmin = 1