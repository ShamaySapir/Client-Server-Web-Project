const cors = require("cors");

module.exports = async (err, req, res, next) => {
  cors();
  next();
};
