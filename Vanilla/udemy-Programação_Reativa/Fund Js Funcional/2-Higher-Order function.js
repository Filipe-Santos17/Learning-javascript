//Função de ordem superior
/*
 * Função pode ser o argumento de uma função e ser retornada por outra função 
 */

function run(fn){
    //fn()
    return `Result: ${fn()}`
}

function Hello(){
    console.log("Hello Word")
    return 3 //Se a função for invocada essa será a resposta
}

run(Hello) //Se não passar uma função da erro
//se invocar uma função | colocar (), será passado o retorno da função

run(function(){
    console.log("Hello Anonymus")
})

const res = run(Math.random)
console.log(res)

//Curring - tecnica incrivel e muito usada na prog. funcional
function finalPrice(price){
    return function(tax){
        return price * (tax + 1)
    }
}

console.log(finalPrice(25)(0.0875))

const nuPriceFinal = finalPrice(25)

console.log(nuPriceFinal(0.0876))