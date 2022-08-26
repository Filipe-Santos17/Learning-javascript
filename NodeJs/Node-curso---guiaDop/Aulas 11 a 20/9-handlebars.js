//Aula 19, 20  
const express = require("express")
const app = express()
const handlebars = require("express-handlebars") //Versão do Handlebars especifica para o express
const Sequelize = require("sequelize"); //Sequelize facilita o envio de comandos mysql

//Handlebars é uma template engine - da poderes ao html para se comunicar com o back-end
//exemplo - utilizar variaveis do back no front

//config
    //template
        app.engine("handlebars", handlebars({defaultLayout: "main"}))
        app.set("view engine", "handlebars")
    //Conexão com o Banco Mysql
        const banco = new Sequelize("test","root","S@ntos27", {
            host: "localhost", // qual o servidor que irá rodar, localhost = interno
            dialect: "mysql" //Qual banco de dados será conectado
        });// Nome-Database, nome-usuario(root), senha-mysql     
        
        banco.sync({force: true})

app.get("/",(req,res) => {
    res.send(`<h1>Pagina Principal</h1>`);
})

app.get("/cad", (req,res) => {
    res.render("formulario");//sem precisar o .handlebars
})

app.post("/add", (req,res) => { //Essa rota so pode ser acessada depois de uma requisição do metodo post
    //Não se pode acessar uma rota do tipo post por link/url
    res.send("formulario");//sem precisar o .handlebars
})

app.listen(8081, () => console.log("Servidor rodando"))