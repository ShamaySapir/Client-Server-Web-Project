// const corsMiddleware = require("./corsMiddleware");
const errorMiddleware = require("./errorMiddleware");
const cors = require("cors");

const appMiddleware = (app) => {
  app.use(cors()); // fix the middleware
  app.use(errorMiddleware);
};

module.exports = appMiddleware;
