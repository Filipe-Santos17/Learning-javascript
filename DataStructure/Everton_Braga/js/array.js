//Maneira mais complexa e desgastante
let avgTempJan = 31.9
let avgTempFev = 35.3
let avgTempMar = 32
let avgTempAbr = 38
let avgTempMai = 36.7

console.log("Temp Media em Março: " + avgTempMar)

let TempMed = [] //declarado como um array

TempMed[0] = 30
TempMed[1] = 40
TempMed[2] = 50
TempMed[3] = 20
TempMed[4] = 10

console.log(TempMed)


//Uma melhor forma de declarar um array
let day = new Array()

let daysOfWeek = new Array(
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
) //Inicializa array já com dados, no entanto é uma pessima pratíca

let daysOfWeek2 = new Array(7)//O 7 indica o numero de casas/length
//Não precisa definir um tamanho previo pro array

console.log(daysOfWeek2.length) //7 items de fatos
console.log(daysOfWeek2)// 7 items vazio

//Estrutura de Repetição
for(var i = 0 ; i < daysOfWeek.length ; i++){
    console.log(daysOfWeek[i]) 
    // < não pode ser <=, pois se não retornarai um item 'undefined'/vazio
}


//Fibonnaci
let Fibonnaci = []
Fibonnaci[0] = 1
Fibonnaci[1] = 1
Fibonnaci[2] = 2

for(var i = 3 ; i < 20 ; i++){
    Fibonnaci[i] = Fibonnaci[i - 1] + Fibonnaci[i - 2]
    // ou console.log(Fibonnaci[i])
}

console.log(Fibonnaci)


/*Inserindo Valores no Array*/
let numbers = [0,1,2,3,4,5,6,7,8,9]

console.log(numbers)

numbers[numbers.length] = 10 //Insere um valor na ultima casa
numbers[numbers.length] = 11 //Funciona ainda

console.log(numbers)

numbers.push(12) //Forma melhor de inserir em ultimo lugar
numbers.push(13) //Ainda funciona não importa quantos

numbers.unshift(-1) //Se torna o primeiro valor

console.log(numbers)

numbers[0] = -2 //Dessa forma você substitui o valor e não adiciona um valor novo
console.log(numbers)

numbers.pop()//Remove o ultimo valor do array
numbers.shift()//Remove o primeiro valor do array
//Ambos não precisam de parametros, pois não estão inserindo itens, apenas removendo

number.splice()
//1º param = posição do array que será removida
//2º param = numeros de items que serão removidos

numbers.splice(3,0,3,5,7)// 1º param posição do array
//2º param = numeros de elementos que será removida, se for zero nada será removido e sim adicionado
//outros param = elementos inseridos