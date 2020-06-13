const express = require("express");
const router = express.Router();
const { dbHandlers } = require("../handlers");

router.get("/getRecipe/:recipeId", dbHandlers.getRecipe);

module.exports = router;
