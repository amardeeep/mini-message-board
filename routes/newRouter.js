const { Router } = require("express");
const newRouter = Router();
const newController = require("../controllers/newController");
newRouter.get("/", newController.getForm);

module.exports = newRouter;
