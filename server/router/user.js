const Controller = require("../controller/user");
const authentication = require("../middleware/authentication");

const userRouter = require("express").Router();

// userRouter.get("/", authentication, Controller.getUSer);  //! kalau mau di handle
userRouter.get("/", Controller.getUSer);
userRouter.post("/register", Controller.register);
userRouter.post("/login", Controller.login);

module.exports = userRouter;
