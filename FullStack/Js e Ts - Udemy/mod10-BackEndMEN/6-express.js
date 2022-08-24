const express = require("express")
const app = express()

//CRUD - CREATE = POST, READ = GET, UPDATE = PUT , DELETE

// Função do express - permite usar o req.body //enviar e receber parametros 
app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res) => { //req = requisição , res = resposta
    res.send("Hello world")
})//app = express, .metodo("rota/", function(){ comandos})

app.post("/",(req,res) => { //rota de criação de dados
    res.send("recebir o formulario")
})

app.get("/contato",(req,res) => { //req = requisição , res = resposta
    res.send("Hello world")
})

app.get("/teste/:Msg?",(req,res) => { //req = requisição , res = resposta
    res.send(req.params.Msg)
    res.send(req.body) //paramNome=valor&paramNome2=valor2
    //: No inicio da url indica que um dado virá na string
    //? No final da url indica que esse parametro é opcional
})


app.listen(3000, () => console.log("Servidor Executando no host http://localhost:3000"))
//assim gera um link no terminal
//localhost = 127.0.1.0
//nodemon = assiste a atualização do programa
//funciona por 'npx nodemon file.js' ou 'nodemon file.js' ou crie o comando no package.json e faça o npm run comando