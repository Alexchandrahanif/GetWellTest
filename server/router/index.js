const logicRouter = require("./logic");
const userRouter = require("./user");

const router = require("express").Router();

router.use("/user", userRouter);
router.use("/logic", logicRouter);

module.exports = router;
