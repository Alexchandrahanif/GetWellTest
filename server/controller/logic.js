const { Logic } = require("../models/index");
class Controller {
  static async logic(req, res, next) {
    try {
      const { input } = req.body;
      const data = await Logic.create({
        input,
      });

      function jumlah(input) {
        // input = input.toLoweCase();
        input = input.split("").join("");
        let result = {};
        let temp = 0;
        for (let i = 0; i < input.length; i++) {
          if (!result[input[i]]) {
            result[input[i]] = 1;
          } else result[input[i]]++;
        }

        for (const key in result) {
          if (result[key] == 1) temp++;
        }
        return temp;
      }

      res.status(200).json({
        message: input,
        jumlahHuruf: jumlah(input),
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Controller;
