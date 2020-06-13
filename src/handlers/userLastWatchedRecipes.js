const utils = require("../shared/utils");
const userLastWatchedRecipesHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.params.userId;
    let lastWatched = await db.viewed.findAll({
      where: { userId: id },
      order: [["updatedAt", "DESC"]],
      raw: true,
      attributes: ["recipeId"],
    });
    lastWatched = lastWatched.slice(0, 3);
    const lastWatchedRecipes = [];
    for await (const obj of lastWatched) {
      const { data: recipe } = await utils.getRecipeInfoByID(obj.recipeId);
      lastWatchedRecipes.push(utils.getRecipePreviewByData(recipe));
    }
    // return value
    res.status(200).json(lastWatchedRecipes);
  } catch (err) {
    console.log(err);
    res.status(400).send("bad request");
  }
};

module.exports = userLastWatchedRecipesHandler;
