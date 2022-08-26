'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("posts",{
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      topic:{
        type: Sequelize.STRING,
        allowNull: false
      },
      content:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  async down (queryInterface, Sequelize) {
    
  }
};
