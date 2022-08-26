//Aula 18 - Models no Sequelize
const express = require("express");
const app = express();

const Sequelize = require("sequelize"); //Sequelize facilita o envio de comandos mysql
const banco = new Sequelize("test","root","S@ntos27", {
    host: "localhost", // qual o servidor que irá rodar, localhost = interno
    dialect: "mysql" //Qual banco de dados será conectado
});// Nome-Database, nome-usuario(root), senha-mysql

banco.authenticate().then( //Then = Função de Call-Back - executa quando um evento acontece
    () => console.log("Conectado ao Banco Mysql com Sucesso")
    ).catch(
        erro => console.log(`Erro no : ${erro}`) 
    ) //Verifica se a conexão foi feita com sucesso
//then e catch representam a programação Assincrona

const post = banco.define("postagens", { //Nome da tabela que será criada
    titulo: {
        type: Sequelize.STRING //Tipo VarChar no MySQL
    },
    conteudo: {
        type: Sequelize.TEXT //Ao contrario do String, o tipo text possui o limite infinito de caracteres
    }
})

//post.create({titulo : "valor", conteudo: "valor"}) //Comando que Insere os valores
post.sync({force: true}); //Irá gerar uma tabela na força

const user = banco.define("usuarios", {
    nome: {type: Sequelize.STRING},
    sobrenome: {type: Sequelize.STRING},
    idade : {type: Sequelize.INTEGER},
    email: {type: Sequelize.STRING}
})

user.sync({force: true});

/*
Sequelize apaga a tabela com mesmo nome se existir
A tabela possui os registros: 
-id = idenficação da tabela
-createdAt = Quando a tabela foi criada
-updatedAt = Quando ocorreu a ultima modificação 
*/

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
});

app.listen(8081, () => console.log("Servidor Funcionando"));