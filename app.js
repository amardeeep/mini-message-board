const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
app.use("/", indexRouter);
app.use("/new", newRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.listen(3000, () => {
  console.log(`Listening on port ${3000}`);
});
