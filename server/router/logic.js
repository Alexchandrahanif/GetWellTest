const Controller = require("../controller/logic");

const logicRouter = require("express").Router();

logicRouter.post("/", Controller.logic);

module.exports = logicRouter;
