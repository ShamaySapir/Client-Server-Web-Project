const corsMiddleware = require("./corsMiddleware");
const errorMiddleware = require("./errorMiddleware");

const appMiddleware = (app) => {
  app.use(corsMiddleware); // fix the middleware
  app.use(errorMiddleware);
};

module.exports = appMiddleware;
