'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    bookName: DataTypes.STRING,
    bookAuthor: DataTypes.STRING,
    bookImage: DataTypes.TEXT,
    bookDescription: DataTypes.TEXT,
    bookGenre: DataTypes.STRING,
    bookPrice: DataTypes.INTEGER,
    bookStock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};