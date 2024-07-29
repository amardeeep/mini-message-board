const { Router } = require("express");
const newRouter = Router();
const newController = require("../controllers/newController");
newRouter.get("/", newController.getNew);
module.exports = newRouter;
