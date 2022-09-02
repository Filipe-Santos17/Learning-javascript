function Stack(){
    let items = []

    this.push  = function(element){
        items.push(element) //Adiciona elementos
    }

    this.pop = function(){
        return items.pop() //Remove o ultimo item
    }

    this.peek = function(){
        return items[items.length - 1]
    }

    this.isEmpty = function(){
        return items.length === 0 
    }

    this.clear = function(){
        items = [] //torna o array vazio
    }

    this.size = function(){
        return items.length
    }

    this.print = function(){
        console.log(items.toString())
    }
}


var pilha = new Stack()

pilha.push(2)
pilha.print()
pilha.push(5)
pilha.print()
pilha.push(7)
pilha.print()

pilha.pop()
pilha.print()
pilha.pop()
pilha.print()


//Conversor de decimal para binario
function dec2bin(ele){
    var restStack = [],
    rest,
    binaryString = ''

    while(ele > 0){
        rest = Math.floor(ele % 2) //encontra o resto da divisão
        restStack.push(rest) // inseri o resto no array
        ele = Math.floor(ele / 2) //encontra a metade do valor, arredonda pra baixo e substitui o valor
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString() //remove o ultimo item, torna ele uma string e une na variavel
    }

    return binaryString
}

console.log(dec2bin(40))


//Conversor de decimal para outras bases

