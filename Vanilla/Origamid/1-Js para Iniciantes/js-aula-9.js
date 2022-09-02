'use strict' //impede erros bobos na função
//Escopo - a função do escopo é evitar que haja conflitos entre nomes de variaveis

//Escopo de função
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
    //Variavel declarada na função pai podem ser usadas na função filha, mas o contrario não
}
  
mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined
//Se a variavel for declarada fora de todos os blocos ela se torna global, e por isso pode ser acessada em qualquer lugar

//VARIÁVEL GLOBAL (ERRO)
//Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro. ex:
function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
}
  
mostrarCarro(); // Fusca
console.log(carro); // Fusca

//Escopo de Bloco
//Variaveis do tipo var vazam o bloco, let e const não
if(true) {
    var carro = 'Fusca';
    let ano = 1995
    console.log(carro);
    console.log(ano);
}//Chaves {} criam um bloco, = {} é um objeto

console.log(carro); // Carro
console.log(ano); //Erro

if(false){
    var moto = 'Suzuki'
    console.log(moto)
}
//o var faz o hosting e cria a variavel moto, no entanto o valor não é atribuido por esta no bloco false
console.log(moto)//undefined

//use o for loop com let para evitar erros de bloco também
for(var i = 0 ; ; ){
    //Assim não - i pode ser chamado fora do for
}

for(let i = 0; ; ){
    //Assim - i apenas existe no for
}


//Const - Escopo de bloco como let e impede a redeclaração da variavel e a mudança do valor
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro


// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(cor, marca, portas);//marca e porta obedecem escopo de bloco
  
  // Como corrigir o erro abaixo?
  function somarDois(x) {
    const dois = 2;//Essa variavel vai para fora da função
    return x + dois;
  }

  function dividirDois(x) {
    return x + dois;
  }
  
  somarDois(4);
  dividirDois(6);
  
  // O que fazer para total retornar 500?
  var numero = 50;
  
  for(var numero = 0; numero < 10; numero++) {//troque o var por let
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  



  

