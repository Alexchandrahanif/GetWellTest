"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Logic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logic.init(
    {
      input: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Inputan tidak boleh kosong",
          },
          notEmpty: {
            msg: "Inputan tidak boleh kosong",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Logic",
    }
  );
  return Logic;
};
