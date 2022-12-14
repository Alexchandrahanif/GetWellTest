const cors = require("cors");
const express = require("express");
const handeError = require("./middleware/handleError");
const router = require("./router");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use(handeError);

app.listen(port, () => {
  console.log(`semoga diterima ya Allah, aamiiin`);
});
