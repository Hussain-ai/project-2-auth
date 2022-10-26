'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('products', [{
        itemSKU: 001,
        itemName: 'Maze Runner ',
        itemDesription: "about Thomas",
        itemImage: 'books\maze runner.jpg',
        itemPrice: 15,
        itemStock: 38
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('products', null, {});
  }
};
