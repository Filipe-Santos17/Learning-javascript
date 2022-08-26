const {Model, DataTypes} = require("sequelize")

class Post extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            topic: DataTypes.STRING,
            content: DataTypes.TEXT,
        },{
            sequelize
        })
    }
}

module.exports = Post