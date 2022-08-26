var express = require ("express");
const app = express(); //Constante principal do codigo, ser uma const torna o programa mais seguro


// Função de callback = executada quando algum evento acontece
// Cada uma destas funções é uma rota = caminhos da aplicação
app.get("/", function(req,res){
    res.send("Seja bem vindo ao meu app!");
});
/*
app.get("/hello/:nome", function(req,res){ //Dessa forma se pode passar qualquer parametro no :nome 
    res.send("Hello World!")
})*/
app.get("/hello/:nome/:cargo", function(req,res){
    res.send("<h1>Olá "+req.params.nome+" , seu cargo é "+req.params.cargo+"</h1>") //So é possivel enviar um send dentro de uma rota/função
    //Aceita html internamente
})
//req tem a função de receber dados de uma requisição
//res tem a função de retornar

app.listen(8082, function(){
    console.log("Servindo Funcionando na url http://localhost:8082");
});//Função do express/escutando a porta(8081) #Essa função deve ser sempre a ultima
//Dica: sendFile envia arquivos html

//Proxima aula: Instale o nodemon com "npm i -g nodemon" e executa "nodemon progr.js"