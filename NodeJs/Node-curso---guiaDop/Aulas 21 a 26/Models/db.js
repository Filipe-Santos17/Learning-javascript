//Este arquivo fica especifico para a conexão com o banco de dados
const Sequelize = require("sequelize");

const banco = new Sequelize("postapp","root","S@ntos27", {
    host: "localhost", // qual o servidor que irá rodar, localhost = interno
    dialect: "mysql" //Qual banco de dados será conectado
});// Nome-Database, nome-usuario(root), senha-mysql     

banco.sync().then(() => console.log('DB connection sucessful.') , erro => console.log(err))
  

module.exports = {
    Sequelize: Sequelize,
    Banco: banco,
}