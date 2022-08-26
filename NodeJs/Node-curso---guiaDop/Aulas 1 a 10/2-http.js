/**
 * Requisição Web  ou Protocolo que permite um usuario se comunicar com o servidor e realizar a troca de dados
 * Modulo http do node é tido como + "fraco", por isso se usa o Express
 * Modulo fs = escrever/deletar e alterar arquivos internos a memoria do computador
 */

var http = require('http'); // import {createServer} from 'http'

http.createServer(function(req,res){
    res.end("Hello World")//end, serve para enviar a mensagem
}).listen(8080); //É preciso abrir um serivdor http e informar em qual porta você utiliza abrir o servidor / Sempre utilize portas altas para evitar estarem sendo utilizadas

console.log("O servidor esta on"); // Sinal de que o servidor esta sendo 

// req = requisição
// res = resposta

//Alterou o codigo reinicie o servidor node \\ utilize o nodemon