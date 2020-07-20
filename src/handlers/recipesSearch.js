const axios = require("axios");
const _ = require("lodash");
const {
  getRecipeInfoByID,
  getRecipePreviewByData,
} = require("../shared/utils");

const apiDomain = "https://api.spoonacular.com";

const recipesSearchHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const { id, query, cuisine, diet, intolerances, number } = req.body;
    if (req.session.user_id) {
      const searchObj = {
        id,
        query,
        cuisine,
        diet,
        intolerances,
        number,
      };
      userAddLastSearch(
        req.session.user_id,
        _.pickBy(searchObj, _.identity),
        db
      );
    }
    const searchResponse = await axios.get(`${apiDomain}/recipes/search`, {
      params: {
        id,
        query,
        cuisine,
        diet,
        intolerances,
        number,
        instructionsRequired: true,
        apiKey: process.env.spooncular_apiKey,
      },
    });
    let recipes = await Promise.all(
      searchResponse.data.results.map((rawRecipe) =>
        getRecipeInfoByID(rawRecipe.id)
      )
    );
    recipes = recipes.map((recipe) => getRecipePreviewByData(recipe.data));
    const result = [];
    recipes.forEach((recipe) => result.push(recipe));
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send("bad request");
    next(error);
  }
};

const userAddLastSearch = async (userId, searchObj, db) => {
  // check if userId exists in users table
  const user = await db.users.findOne({
    where: { id: userId },
    raw: true,
  });
  // if true - update the entry in users table
  if (user) {
    db.users.update(
      {
        lastSearch: searchObj,
      },
      {
        where: { id: userId },
      }
    );
  } else {
    throw new Error();
  }
};

module.exports = recipesSearchHandler;
