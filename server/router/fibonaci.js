const Controller = require("../controller/fibonaci");
const authentication = require("../middleware/authentication");

const fibonaciRouter = require("express").Router();

// fibonaciRouter.post("/", authentication, Controller.fibonaci); //! kalau mau di handle
fibonaciRouter.post("/", Controller.fibonaci);

module.exports = fibonaciRouter;
