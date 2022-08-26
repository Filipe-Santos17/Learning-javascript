//Aula 22, 23, 24, 25 e 26
const express = require("express")
const app = express()
const handlebars = require("express-handlebars") //Versão do Handlebars especifica para o express
const Sequelize = require("sequelize"); //Sequelize facilita o envio de comandos mysql
const bodyParser = require("body-parser");
const Post  = require('./Models/Posts');
const { redirect } = require("express/lib/response");

//Handlebars é uma template engine - da poderes ao html para se comunicar com o back-end
//exemplo - utilizar variaveis do back no front

//config
    //template
        let hbs = handlebars.create({
            defaultLayout: "main" //Resolve o problema "handlebars is not a function"
        })
        app.engine("handlebars", hbs.engine)
        app.set("view engine", "handlebars")
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    //Conexão com o Banco Mysql
       //Agora fica na pasta Models
    //Rotas
        app.get("/",(req,res) => {
            Post.all({order: [['id','DESC']]}).then( posts => {res.render("home", {postss: posts})} )//.all exibe tudo que esta na tabela
        })//ASC no lugar de desc seria crescente
        
        app.get("/cad", (req,res) => {
            res.render("formulario");//sem precisar o .handlebars
        })
        
        app.post("/add", (req,res) => { //Essa rota so pode ser acessada depois de uma requisição do metodo post
            //Não se pode acessar uma rota do tipo post por link/url
            //res.send(`formulario recebido nome:${body.titulo} Contéudo:${res.body.conteudo}`);//sem precisar o .handlebars
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(() => {
                res,redirect("/")
                //res.send("Post Criado com Sucesso!");
            }).catch( erro => {
                res.send(`Não foi possivel criar o post, erro:${erro}`)
            })
        })

        app.get("/delete/:id", (req,res) => {
            Post.destroy({where: {'id':req.params.id}}).then(() => res.send("Postagem deletada com Sucesso")).catch(error => {res.send("Erro: Postagem não deletada"); console.log(`Erro: ${error}`)})
        })

app.listen(8081, () => console.log("Servidor rodando"))