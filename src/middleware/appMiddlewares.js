const corsMiddleware = require("./corsMiddleware");
const errorMiddleware = require("./errorMiddleware");

const appMiddleware = (app) => {
  app.use(corsMiddleware);
  app.use(errorMiddleware);
};

module.exports = appMiddleware;
