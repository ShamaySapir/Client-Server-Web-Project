const cors = require("cors");

module.exports = async (err, req, res, next) => {
  cors({
    origin: "http://127.0.0.1:8080",
    mode: "cors",
  });
  next();
};
