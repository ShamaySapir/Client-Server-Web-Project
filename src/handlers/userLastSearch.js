const userLastSearchHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.params.userId;
    // get from db
    const lastSearchObj = await db.users.findOne({
      where: { id: id },
      raw: true,
    });
    // return value
    if (!lastSearchObj) throw new Error();
    let { lastSearch } = lastSearchObj;
    lastSearch = lastSearch || {};
    res.status(200).send(lastSearch);
  } catch (err) {
    res.status(400).send("bad request " + err);
  }
};

module.exports = userLastSearchHandler;
