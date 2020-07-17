// it is possible to change favorite to true only if the recipe viewed
const userAddFavoriteRecipesHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.session.user_id;
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
          favorite: true,
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
    console.log(err);
    res.status(400).send("bad request");
  }
};

module.exports = userAddFavoriteRecipesHandler;
