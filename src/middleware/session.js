const session = require("client-sessions");

const sessionMiddleware = session({
  cookieName: "session", // the cookie key name
  secret: process.env.COOKIE_SECRET, // the encryption key
  duration: 20 * 60 * 1000, // expired after 20 sec
  activeDuration: 0, // if expiresIn < activeDuration,
  
  // the session will be extended by activeDuration milliseconds
  cookie: {
    httpOnly:false
  }
});
module.exports = sessionMiddleware;
