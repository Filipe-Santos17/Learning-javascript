const db = require("./db")

const Post = db.Banco.define('Postagens',{
    titulo:{
        type: db.Sequelize.STRING 
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

Post.sync({force: true})//Essa linha força e excluir/recriar a tabela toda vez que for executada
//Deve ser executada apenas uma unica vez

module.exports = Post;