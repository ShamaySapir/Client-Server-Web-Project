const userDeleteFavoriteRecipesHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.params.userId;
    // check if recipeId already exists in viewed table
    const recipeId = req.body.recipeId;
    const recipe = await db.viewed.findOne({
      where: { userId: id, recipeId: recipeId },
      raw: true,
    });
    // if true - update the entry in viewed table
    if (recipe) {
      db.viewed.update(
        {
          favorite: false,
        },
        {
          where: { userId: id, recipeId: recipeId },
        }
      );
    } else {
      throw new Error();
    }
    // return value
    res.status(200).send();
  } catch (err) {
    res.status(400).send("bad request");
  }
};

module.exports = userDeleteFavoriteRecipesHandler;
