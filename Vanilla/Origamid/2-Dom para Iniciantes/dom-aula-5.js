/* Dimensões e Distâncias */
//$0 - Obj manipulavel no console  = tag selecionada pelo clique na aba Elements

const section = document.querySelector('.animais');

console.log(section.clientHeight); // height + padding
console.log(section.offsetHeight); // height + padding + border
console.log(section.scrollHeight); // height total, mesmo dentro de scroll

