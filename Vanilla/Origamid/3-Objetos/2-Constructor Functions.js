function Carro3(minhaMarca, Preco){//Forma certa de escrever objs
  const taxa = 1.2
  meuPreco = Preco * taxa
  this.marca = minhaMarca//this sempre faz referência ao objeto
  this.preco = meuPreco
  return {
    marca,
    preco
  }
}

console.log(Carro3('ferrari',5e4))

//Usos praticos e reais/dia a dia dos objetos são para alterar o DOM

const funcDom = {
  seletor: 'li',
  
  element(){
    //console.log(this.seletor) // Faça isso antes pra ter uma certeza se selecionou o correto / sem this não funciona

    return document.querySelector(this.seletor)
  },
  ativar(){
    this.element().classList.add('ativar')
  }
}


//A função acima pode ser escrita melhor se feita desse jeito
function functDom(element){
  
  this.element = function(){
    return document.querySelector(element)    
  }

  //Parametros semprem podem ser passados
  this.ativar = function(classe){
    this.element().classList.add(classe)
  } 
}

const seletorUl = new functDom('ul')
seletorUl.ativar('classeQualquer')