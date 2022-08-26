/*
    SQL BASICO:
    Instalação do Mysql e programas de suporte
    show/use databases n-ome;
    create table n-ome( n-ome tipo not *null default);
    insert into n-ome(n-ome de cada um) values(valores em ordem);
    select * from n-ome where c-ondição 
    delete from n-ome // A tabela inteira
    --recomenda-se usar SEMPRE o where para evitar danificar a tabela
    update n-ome set nome = novo-nome // alterei o nome de todo mundo
    where nome = "marquinhos" // alterei o nome apenas de marquinhos

    npm i -s sequelize // Ferramenta node/npm para conectar e alterar banco de dados
    npm i -s mysql2 // suporte adicional ao mysql

    //Sequelize é uma ORM
*/

const Sequelize = require('sequelize')
const sequelize = new Sequelize('','','',{
    host: "localhost",//Obj Json informa onde esta o mysql na nossa maquina
    dialect: "mysql" //Qual tipo de banco de dados irá ocorrer a conexão
}) // nome-do-banco, root, senha-do-banco


sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso") // Resposta positiva
}).catch(function(erro){
    console.log("Erro ao se conectar: "+erro) // Se houve erro na resposta e retorna qual foi o erro que ocorreu
}) // Testa se a conexão com o banco de dados foi feita com sucesso
// Isso se trata de programação assincrona