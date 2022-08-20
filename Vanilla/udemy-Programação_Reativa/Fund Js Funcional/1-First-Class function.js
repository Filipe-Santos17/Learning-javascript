//Função como cidadão de 1º linha - função
/*
 * Quando a linguagem permite armazenar uma função em uma variavel ela é first class function 
 */

const soma = function(a,b){
    return a + b
}

const subt = function(a,b){
    return a - b 
}

const mult = (a,b) => a * b //return implicito

const divi = (a,b) => a / b 

console.log(soma(2,3))