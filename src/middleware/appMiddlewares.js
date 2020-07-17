// const corsMiddleware = require("./corsMiddleware");
const errorMiddleware = require("./errorMiddleware");
const sessionMiddleware = require("./session");

const appMiddleware = (app) => {
  // app.use(corsMiddleware); // fix the middleware
  app.use(sessionMiddleware);
  app.use(errorMiddleware);
};

module.exports = appMiddleware;
