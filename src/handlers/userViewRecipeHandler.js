const userViewedRecipeHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.params.userId;
    // check if recipeId already exists in viewed table
    const recipeId = req.body.recipeId;
    const recipe = await db.viewed.findOne({
      where: { userId: id, recipeId: recipeId },
      raw: true,
    });
    // if not - create new entry in viewed table
    if (!recipe) {
      const viewedRecipe = { userId: id, recipeId: recipeId, favorite: false };
      await db.viewed.create(viewedRecipe);
    }

    res.status(200).send();
  } catch (err) {
    res.status(400).send("bad request");
  }
};

module.exports = userViewedRecipeHandler;
