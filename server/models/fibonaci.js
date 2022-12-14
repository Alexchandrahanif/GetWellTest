"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fibonaci extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fibonaci.init(
    {
      input: {
        type: DataTypes.INTEGER,
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
      modelName: "Fibonaci",
    }
  );
  return Fibonaci;
};
