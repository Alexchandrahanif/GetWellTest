const { Logic } = require("../models/index");
class Controller {
  static async logic(req, res, next) {
    try {
      const { input } = req.body;
      const data = await Logic.create({
        input,
      });

      function sandBox(sentence) {
        let result = {};
        let temp = 0;
        for (let i = 0; i < sentence.length; i++) {
          if (!result[sentence[i]]) {
            result[sentence[i]] = 1;
          } else result[sentence[i]]++;
        }

        for (const key in result) {
          if (result[key] == 1) temp++;
        }
        return temp;
      }

      res.status(200).json({
        message: `berhasil menambahkan ${input} ke tabel Logic`,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Controller;
