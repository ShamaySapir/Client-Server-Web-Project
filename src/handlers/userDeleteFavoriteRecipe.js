const userDeleteFavoriteRecipesHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.params.userId;
    // get from db
    const allUserRecipes = await db.usersRecipes.findAll({
      where: { userId: id },
      include: [{ model: db.recipes, as: "recipe" }],
    });
    const allUserRecipesId = allUserRecipes.map(({ recipe }) => recipe);

    // const favorites = await db.viewed.findAll({
    //   where: { userId: id, favorite: true },
    //   raw: true,
    // });

    // return value
    res
      .status(200)
      .json({ db: allUserRecipesId, spoonacular: favoriteRecipes });
  } catch (err) {
    res.status(400).send("bad request");
  }
};

module.exports = userDeleteFavoriteRecipesHandler;
