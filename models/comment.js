'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comment.belongsTo(models.user)
      models.comment.belongsTo(models.product)
    }
  }
  comment.init({
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};