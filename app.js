require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use("/", indexRouter);

const PORT = process.env.PORT;
const port = parseInt(PORT);
app.listen(port, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
