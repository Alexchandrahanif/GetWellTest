const Controller = require("../controller/fibonaci");

const fibonaciRouter = require("express").Router();

fibonaciRouter.post("/", Controller.fibonaci);

module.exports = fibonaciRouter;
