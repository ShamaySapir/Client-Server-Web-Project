const userDeleteSearchHandler = async (req, res, next) => {
  try {
    const db = req.app.db;
    const id = req.session.user_id;
    db.users.update(
      {
        lastSearch: null,
      },
      {
        where: { id: id },
      }
    );
    res.status(200).send();
  } catch (err) {
    res.status(400).send("bad request " + err);
  }
};

module.exports = userDeleteSearchHandler;
