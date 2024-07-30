const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.listen(3000, () => {
  console.log(`Listening on port ${3000}`);
});
