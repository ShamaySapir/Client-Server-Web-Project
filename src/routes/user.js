const express = require("express");
const router = express.Router({ mergeParams: true });
const { userHandlers } = require("../handlers");

// The last search the user did
router.get("/search", userHandlers.search);

// The user family recipes page
router.get("/family", userHandlers.family);

// The user favorite recipes page
router.get("/favorite", userHandlers.getFavorite);

// The user last three watched recipes
router.get("/lastWatched", userHandlers.lastWatched);

// Add the user viewed recipe to the db
router.post("/viewed", userHandlers.viewed);

// Add the user favorite recipe to the db
router.post("/favorite", userHandlers.addFavorite);

// Delete the user unfavorite recipe from the db
router.post("/unFavorite", userHandlers.deleteFavorite);

// The user personal recipes page
router.get("/", userHandlers.personal);

module.exports = router;
