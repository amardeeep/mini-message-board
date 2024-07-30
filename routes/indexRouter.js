const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.renderIndex);
indexRouter.get("/:title");
indexRouter.get("/new", indexController.getForm);
indexRouter.post("/new", indexController.postForm);
module.exports = indexRouter;
