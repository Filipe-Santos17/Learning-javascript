//Map
/*
 * map é um exemplo de Higher Order function, recebe uma função como param 
 * map apenas funciona com arrays e devolve apenas o numero de itens/mesmo tamanho 
 */

const numbers=[1,2,3,4,5,6]

const students = [
    { name:'Jake' , score:6.4},
    { name:'Susan' , score:8.6},
    { name:'Emma' , score:9.4},
    { name:'Peter' , score:9.1},
]

const NotaX2 = students.map(({name,score}) => {
    return console.log(score*2)
})
//ou//
const getScore = el => el.score
console.log()

//console.log(NotaX2) - Não precisa fazer o console se já ocorre no map

//como seria sem o map
const numbersV3=[]
for(let n of numbers){
    numbersV3.push(n*2)
}