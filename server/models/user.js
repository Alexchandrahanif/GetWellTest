("use strict");
const { hashingPassword } = require("../helper/helper");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Nama tidak boleh kosong",
          },
          notNull: {
            msg: "Nama tidak boleh kosong",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email sudah terdaftar",
        },
        validate: {
          notEmpty: {
            msg: "Email tidak boleh kosong",
          },
          notNull: {
            msg: "Email tidak boleh kosong",
          },
          isEmail: {
            msg: "Harus format email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password tidak boleh kosong",
          },
          notNull: {
            msg: "Password tidak boleh kosong",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Address tidak boleh kosong",
          },
          notNull: {
            msg: "Address tidak boleh kosong",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((data) => {
    data.password = hashingPassword(data.password);
  });
  return User;
};
