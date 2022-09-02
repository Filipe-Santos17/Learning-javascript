//Array - É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

const jogos = ['God of War', 'Horizon', 'Resident Evil']

console.log(jogos[0])//mostra apenas o primeiro item
jogos.push('Detroit Become Human')//console.log daria 4 - pois agora tem 4 itemns
console.log(jogos)//Detroit já adicionado

//for loop
for(var i = 0 ; i < jogos.length ; i ++){ //i = 0 ; enquanto i < numeros de item no jogo faça ; i + 1 
    console.log(jogos[i])
}

//while loop
var n = 0
while (n < jogos.length){
    console.log(jogos[n])
    n++
}

//break - todo loop para se houver a palavra break ; se colocar no inicio o loop nem acontece
for(var i = 0 ; i < jogos.length ; i ++){ //i = 0 ; enquanto i < numeros de item no jogo faça ; i + 1 
    console.log(jogos[i])
    if(i == 2){ //Agora 'Detroit Become Human' não aparece mais
        break 
    }
}

//forEach
jogos.forEach((jogo, index) => { //1º Param = elemento interno do array ; 2º Param = numero do elemento na ordem
    console.log(`Jogo a venda: ${jogo}`)
})

//Sintaxe do for
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
} //Não faça desse jeito mas funciona


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copa = [1959, 1962, 1970, 1994, 2002]
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copa.forEach(item => {
    console.log(`O Brasil ganhou a copa em ${item}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0 ; i < frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === 'Pera'){//Após Pera
        break
    }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimafruta = frutas[frutas.length - 1]
console.log(ultimafruta)