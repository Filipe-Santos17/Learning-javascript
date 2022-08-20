//Desafio
function soma(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(soma(1)(2)(3))


function calculo(x){
    return function(y){
        return function(fn){
            return fn(x,y)
        }
    }
}

function somar(a,b){
    return a + b
}

function subtr(a,b){
    return a - b
}

console.log(calculo(2)(4)(somar))
console.log(calculo(3)(1)(subtr))


//Arrow Functions não precisam de return se tiver apenas uma linha de codigo// Auto Return
const somarTotal = (... numeros) => { //Utiliza o rest para calcular um numero indeterminado de params
    console.log(Array.isArray(numeros)) // testa se retorna um array / resp = true

    let total=0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(somarTotal(1,2,3,4))
console.log(somarTotal(1,2,3,4,6,5,7,8,9,10))

const base = base => exp => Math.pow(base,exp) // funciona
console.log(base(2)(10))

//arrow function é AutoReturn e tem this diferente

Array.prototype.ultimo = function(){ //qualquer array pode receber essa função
    console.log(this [this.length - 1]) //utiliza o this para se referenciar ao valor do array
}

const numeros = [1,2,3,4,5,6,7,8,9,10]
numeros.ultimo()
