const Controller = require("../controller/logic");
const authentication = require("../middleware/authentication");

const logicRouter = require("express").Router();

logicRouter.post("/", Controller.logic);
// logicRouter.post("/", authentication, Controller.logic); //! kalau mau di handle

module.exports = logicRouter;
