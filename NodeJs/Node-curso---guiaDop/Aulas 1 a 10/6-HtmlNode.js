// Como exibir arquivos html na requisição do servidor node

var express = require("express")
const app = express();

app.get("/", function(req,res){ // "/" é index
    res.sendFile(__dirname + "/HTML/default.html")
    // __dirname torna o diretorio do codigo como padrão
    // dirname = todo o codigo/localização anterior dos arquivos
});
// Template Enginers são a forma mais pratica de redirecionar arquivos html (proximas aulas)
app.listen(8083,function(){console.log("Servidor Executando");});