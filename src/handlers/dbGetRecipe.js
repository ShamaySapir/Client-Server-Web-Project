const getRecipeFromDBHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.params.recipeId;
    // get from db
    const recipe = await db.recipes.findOne({
      where: { id: id },
    });
    // return value
    res.status(200).json(recipe);
  } catch (err) {
    res.status(400).send("bad request " + err);
  }
};
module.exports = getRecipeFromDBHandler;
