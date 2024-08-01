const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.renderIndex);
indexRouter.get("/new", indexController.getForm);
indexRouter.post("/new", indexController.postForm);
indexRouter.get("/:title/:message/:date", indexController.getOpen);
module.exports = indexRouter;
