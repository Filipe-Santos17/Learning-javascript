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

