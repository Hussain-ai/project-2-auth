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
      bookName: {
        type: Sequelize.STRING
      },
      bookAuthor: {
        type: Sequelize.STRING
      },
      bookImage: {
        type: Sequelize.TEXT
      },
      bookDescription: {
        type: Sequelize.TEXT
      },
      bookGenre: {
        type: Sequelize.STRING
      },
      bookPrice: {
        type: Sequelize.INTEGER
      },
      bookStock: {
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