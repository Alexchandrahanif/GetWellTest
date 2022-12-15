const { Fibonaci } = require("../models/index");

class Controller {
  static async fibonaci(req, res, next) {
    try {
      const { input } = req.body;
      // function listFibonacci(int) {
      //   for (var fibonacci = [0, 1], i = 1; i < int; i++)
      //     fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
      //   return fibonacci;
      // }

      const sorting = (inputArr) => {
        let len = inputArr.length;
        for (let i = 0; i < len; i++) {
          for (let j = 0; j < len - 1; j++) {
            if (inputArr[j] < inputArr[j + 1]) {
              let tmp = inputArr[j];
              inputArr[j] = inputArr[j + 1];
              inputArr[j + 1] = tmp;
            }
          }
        }
        return inputArr;
      };

      function listFibonacci(limit) {
        let temp = [0, 1];
        let result = [1];
        let i = 1;
        while (result.length < limit) {
          let number = temp[i] + temp[i - 1];
          temp.push(number);
          if (number % 2 == 1) result.push(number);
          i++;
        }
        return sorting(result);
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
