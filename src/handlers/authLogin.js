const { login } = require("../shared");

const authLoginHandler = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password
  const userId = await login(username,password);
  if (userId) {
    req.session.user_id = userId;
    res.json({ 
      username: username,
      userId: userId,
      });
    return;
  }
  next(new Error("error authenticating username and password"));
};

module.exports = authLoginHandler;
