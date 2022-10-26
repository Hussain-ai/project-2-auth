'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemSKU: {
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      itemDesription: {
        type: Sequelize.STRING
      },
      itemGenre: {
        type: Sequelize.STRING
      },
      itemImage: {
        type: Sequelize.STRING
      },
      itemPrice: {
        type: Sequelize.INTEGER
      },
      itemStock: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};