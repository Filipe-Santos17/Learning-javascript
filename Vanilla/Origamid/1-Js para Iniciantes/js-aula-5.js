//Funções são bloco de codigos que podem ser executados e reutilizados
//pode ter retorno ou não, params ou não

//tipos de função = recebe um argumento ou não, retorna um valor ou não
function AreaQuadrado(lado){
    return lado * lado
}

AreaQuadrado(2) //Faz a chamada/ativa a função

//Exemplo de função com retorno
function pi(){
    return 3.14
}

const piX5 = 5 * pi()
console.log(piX5)


function area(lado, altura){ //aqui são parametros, devem ser separados por ','
    return lado * altura
}

area(8,5)//aqui são argumentos
//parametros são as variaveis que recebem os argumentos

//argumentos podem ser funções, essas são chamadas de Callback
//função anônima são aquelas que o nome da função não são definidos,ex: function(){}  // () => {}

//ex:
addEventListener('click', function(){
    console.log('clicou no body')
})

//função pode não retornar um valor mas se retorna deve ser apenas um

//Se uma função não retorna um valor, ela retorna undefined quando executada no browser
//ex:

function test(lado, lado){
    const lado2 = lado * lado
    console.log(lado2)//retorna isso e undefined, esse ultimo ocorre pois não tem return
}


//Escopo
//Variaveis (var,let,const) declaradas/criadas dentro de uma função não podem ser usadas/ não existem fora dela

// Crie uma função para verificar se um valor é Truthy
function valor(val){
    return !!val
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
addEventListener("click", function(){
    console.log("Filipe Marques dos Santos")
})
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function(){
    console.log("Filipe Marques dos Santos")
})//pagina vazia não funciona pois não possui scroll

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);
  