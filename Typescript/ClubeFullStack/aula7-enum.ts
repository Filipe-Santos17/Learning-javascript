//Enum = cria opções e substitui variaveis ou cases
enum TypeUser {
    Admin = 1,
    Editor = 1,
    Moderador = 1,
}

function TypeUserTest(states: number){
    switch(states){
        case TypeUser.Admin:
            console.log("Admin do grupo")
            break
        
        case TypeUser.Editor:
            console.log("Editor do contéudo")
            break
        
        case TypeUser.Moderador:
            console.log("Moderador da familia")
            break

        default:
            console.log("Usuario Padrão")
            break
    }
}

//Exemplo 2
enum Teclado{
    Up = 'ArrowUp',
    Down = 'ArrowDown',
    Left = 'ArrowLeft',//Esquerda
    Right = 'ArrowRight',//Right
}

window.addEventListener('keydown', e => {
    if(e.key === Teclado.Up){
        console.log(Teclado.Up)
    }
})