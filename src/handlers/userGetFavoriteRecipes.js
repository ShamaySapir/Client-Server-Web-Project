const utils = require("../shared/utils");
const userGetFavoriteRecipesHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.session.user_id;
    // get from db
    const allUserRecipes = await db.usersRecipes.findAll({
      where: { userId: id },
      include: [{ model: db.recipes, as: "recipe" }],
    });
    let allUserRecipesId = allUserRecipes.map(
      ({
        recipe: {
          id,
          image,
          title,
          readyInMinutes,
          likes,
          vegan,
          glutenFree,
          viewed,
          favorite,
        },
      }) => ({
        id,
        image,
        title,
        readyInMinutes,
        likes,
        vegan,
        glutenFree,
        viewed,
        favorite,
      })
    );

    const favorites = await db.viewed.findAll({
      where: { userId: id, favorite: true },
      raw: true,
    });

    const favoriteRecipes = [];
    for await (const favorite of favorites) {
      const { data: recipe } = await utils.getRecipeInfoByID(favorite.recipeId);
      favoriteRecipes.push(utils.getRecipePreviewByData(recipe));
    }
    // return value
    favoriteRecipes.forEach(recipe=>{
      allUserRecipesId.push(recipe)
    })
    res
      .status(200)
      .json({ data: allUserRecipesId });
  } catch (err) {
    res.status(400).send("bad request");
  }
};

module.exports = userGetFavoriteRecipesHandler;
