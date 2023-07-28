const getTemperamentsHandler = require("../Handlers/dogsTemp");
const { Router } = require("express");
const temperamentsRouter = Router();

temperamentsRouter.get("/", getTemperamentsHandler);

module.exports = temperamentsRouter;