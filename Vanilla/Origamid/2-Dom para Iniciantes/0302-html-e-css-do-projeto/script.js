/*Navegação por tabs */
//Para evitar relação entre o estilo e o javascript, crie um indicador especifico pro js, como classe, id ,data e/ou atributo separado(livre de estilo), dica comece por js-

const TabMenu = document.querySelector(`[js-TabMenu]`)
const TabMenuItems = TabMenu.querySelectorAll(`section`)
console.log(TabMenuItems)