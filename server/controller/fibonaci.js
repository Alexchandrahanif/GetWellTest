const { Fibonaci } = require("../models/index");

class Controller {
  static async fibonaci(req, res, next) {
    try {
      const { input } = req.body;
      function listFibonacci(int) {
        for (var fibonacci = [0, 1], i = 1; i < int; i++)
          fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
        return fibonacci;
      }

      const data = await Fibonaci.create({
        input,
      });
      //   console.log(listFibonacci(input));
      res.status(200).json({
        total: listFibonacci(input),
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

// declare the array starting with the first 2 values of the fibonacci sequence
// starting at array index 1, and push current index + previous index to the array
