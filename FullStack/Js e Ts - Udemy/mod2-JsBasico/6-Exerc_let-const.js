const nome = "Filipe"
const sobrenome = "Marques"
const altura = 1.70
const peso = 60

let AnoNascimento = - 20 + 2022  

let imc = peso / (altura * altura) 

//Formal Normal
console.log(nome, sobrenome,", nasceu em ", AnoNascimento,"pesa", peso, "kg com altura de", altura, "m e tem o imc de", imc.toFixed(2))

const nomeCompleto = nome + ' ' + sobrenome
//Template strings
console.log(`${nomeCompleto}, nasceu em ${AnoNascimento} pesa ${peso} kg com altura de ${altura}m e tem o imc de ${imc.toFixed(2)}`)

