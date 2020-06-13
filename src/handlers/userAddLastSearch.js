const userAddLastSearchHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.params.userId;
    // check if recipeId already exists in viewed table
    const searchObj = req.body.searchObj;
    const user = await db.users.findOne({
      where: { userId: id },
      raw: true,
    });
    // if true - update the entry in users table
    if (user) {
      db.viewed.update(
        {
          lastSearch: searchObj,
        },
        {
          where: { userId: id },
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

module.exports = userAddLastSearchHandler;
