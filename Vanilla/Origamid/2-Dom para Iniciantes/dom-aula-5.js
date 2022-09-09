/* Dimensões e Distâncias */
//$0 - Obj manipulavel no console  = tag sele cionada pelo clique na aba Elements //funciona apenas no console

const section = document.querySelector('.animais');

console.log(section.clientHeight); // height + padding
console.log(section.offsetHeight); // height + padding + border
console.log(section.scrollHeight); // height total, mesmo dentro de scroll
//Mesma coisa para o Width, clientWidth

console.log(section.offsetTop)//Distância exata entre o elemento e o corpo da pagína
console.log(section.offsetLeft)//Distância exata entre o elemento e a esquerda da pagína

//Retorna um grande retângulo com widht, height e diversos outros valores
console.log(section.getBoundingClientRect)//Pode se entender como um grande conjunto de coordenadas


//Metodo Window  - para trabalhar com a proporção da tela do usuario

console.log(
    window.innerWidth,//Width da janela
    window.outerWidth,//Soma o Dev Tools também
    window.innerHeight,//Height da pagína
    window.outerHeight,//Soma a barra de endereço(local onde fica o titulo da pagina)
    window.pageYOffset,//Mostra em quantos pixels o scroll já realizou movimento
    window.pageXOffset//
)

if(window.innerWidth < 600){//Se for pra editar a pagína use o CSS
    console.log('menor que 600 px')
}

const TelaSmall = window.matchMedia('(max-width: 600px)')//Essa variavel recebe um objeto
//Pode também ser assim 
const TelaSmall2 = window.matchMedia('(max-width: 600px)').matches//Não retorna com certeza o valor total da tela, apenas retorna o valor atual de uso da tela do usuario

if(TelaSmall.matches){
    console.log("Tela menor que 600px - mobile")
} else {
    console.log("Tela maior que 600px - Desktop")
}

//Exer
// Verifique a distância da primeira imagem em relação ao topo da página
const firstImg = document.querySelector("img")
console.log(firstImg.offsetTop)

// Retorne a soma da largura de todas as imagens
function SomaImagens(){
    const AllImgs = document.querySelectorAll("img")
    let largura = 0

    AllImgs.forEach(item => {
        largura += item.offsetWidth 
    })

    return largura
}

window.onload = function(){
    console.log(SomaImagens())
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a")
links.forEach( item => {
    if(item.offsetWidth > 48 && item.offsetHeight > 48){
        console.log(`Esse link ${item} possui mais de 48 px de width`)
    } else {
        console.log(`Esse link ${item} não possui mais de 48 px de width`)
    }
})

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const menu = window.matchMedia("(max-width: 720px)").matches
if(menu){
    const menuDocument = document.querySelector(".menu")
    menuDocument.classList.add("menu-mobile")
}
