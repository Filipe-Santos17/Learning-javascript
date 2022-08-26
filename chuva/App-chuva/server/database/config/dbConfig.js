module.exports = {
    username: "root",
    database : "chuvaposts",
    password: "S@ntos27",
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamp: true, //created_at & updated_at
        underscored: true //habilita formato snake_case , o formato padrão do sequelize é o pascal case
    },
}