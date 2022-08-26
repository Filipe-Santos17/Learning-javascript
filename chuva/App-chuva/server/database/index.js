const sequelize = require("sequelize"),
data = require("./config/dbConfig"),
Posts = require("./models/postModel")

const db = new sequelize(data)

db.authenticate()
.then(() => console.log("Connection Successuful"))
.catch( error => console.log(`Erro: ${error}`))

Posts.init(db)

module.exports = db