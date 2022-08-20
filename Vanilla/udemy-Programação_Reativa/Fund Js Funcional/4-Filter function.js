//Function Filter
/*
 * Similar a Map, no entanto faz o filtro de uma condição e cria um array com os elementos filtrados/selecionados
 */


const numbers=[1,2,3,4,5,6]

const students = [
    { name:'Jake' , score:6.4},
    { name:'Susan' , score:8.6},
    { name:'Emma' , score:9.4},
    { name:'Peter' , score:9.1},
]

const greatZero = el => el > 0 //Crie funções pequenas, para que possam ser armazenadas um única vez e reutilizada varias vezes

console.log(numbers.filter(greatZero))
console.log(numbers.filter(el => el % 2 === 0)) // pares
console.log(numbers.filter(el => el % 2)) // impares


const greatSeven = ({name,score}) => score > 7
console.log(students.filter(greatSeven))