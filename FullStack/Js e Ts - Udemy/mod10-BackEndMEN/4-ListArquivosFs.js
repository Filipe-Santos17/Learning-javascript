const path = require("path")
const fs = require("fs").promises //fs tem funções sync e async, por isso deve especificar qual utilizar

/*

//Lista todos os arquivos da pasta
fs.readdir(path.resolve(__dirname))
.then( files => console.log(files))
.catch( e => console.log(e))

*/

async function readdir(rootDir = path.resolve(__dirname)){
    //rootDir = rootDir || path.resolve(__dirname) - metodo antigo
    const files = await fs.readdir(rootDir)
    Walk(files)
}

function Walk(files){ 
    files.map(file => {
        console.log(`'${file}'`)
    })
}

readdir() //similar ao ls