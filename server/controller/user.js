const { User } = require("../models/index");
const { createAccessToken, comparePassword } = require("../helper/helper");

class Controller {
  // Register
  static async register(req, res, next) {
    try {
      let { email, password } = req.body;
      const dataUser = await User.create({ email, password });

      res.status(201).json({
        id: dataUser.id,
        email: dataUser.email,
      });
    } catch (error) {
      next(error);
    }
  }

  // Login
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const dataUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!email) {
        throw { name: "Email is required" };
      }

      if (!password) {
        throw { name: "Password is required" };
      }

      if (!dataUser) {
        throw { name: "Invalid email/password" };
      }

      if (!comparePassword(password, dataUser.password)) {
        throw { name: "Invalid email/password" };
      }

      const payload = {
        id: dataUser.id,
      };

      const access_token = createAccessToken(payload);

      res.status(200).json({
        access_token: access_token,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET User
  static async getUSer(req, res, next) {
    try {
      const dataUser = await User.findAll();
      res.status(200).json({
        data: dataUser,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
