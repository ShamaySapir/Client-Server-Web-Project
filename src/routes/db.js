const express = require("express");
const router = express.Router();
const { dbHandlers } = require("../handlers");

router.get("/getRecipe/:recipeId", dbHandlers.getRecipe); // TODO

router.get("/getUser/:userId", dbHandlers.getUser); // TODO

module.exports = router;
