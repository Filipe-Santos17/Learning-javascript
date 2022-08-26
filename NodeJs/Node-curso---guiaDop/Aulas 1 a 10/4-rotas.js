const express = require ("express");
const app = express(); //Constante principal do codigo, ser uma const torna o programa mais seguro - evita alteração e sobrescrita

// Express é um framework orientado a rotas
// Função de callback = executada quando algum evento acontece
// Cada uma destas funções é uma rota = caminhos da aplicação
app.get("/", function(req,res){
    res.send("Seja bem vindo ao meu app!");
});

app.get("/outros", function(req,res){// sempre coloque a / antes do nome
    res.send("Pagina a mais")
})

app.get("/blog", function(req,res){
    res.send("Pagina do Blog")
})

app.listen(8081, function(){
    console.log("Servindo Funcionando na url http://localhost:8081");
});//Função do express/escutando a porta(8081) #Essa função deve ser sempre a ultima
//Dica: sendFile envia arquivos html