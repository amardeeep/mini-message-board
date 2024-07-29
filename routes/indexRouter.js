const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");
const getIndex = indexController.getIndex;

indexRouter.get("/", indexController.renderIndex);
module.exports = indexRouter;
