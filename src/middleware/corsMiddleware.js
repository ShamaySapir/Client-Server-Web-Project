const cors = require("cors");

module.exports = async (err, req, res, next) => {
  // cors({
  //   origin: "http://localhost:8080",
  //   mode: "cors",
  // });
  next();
};
