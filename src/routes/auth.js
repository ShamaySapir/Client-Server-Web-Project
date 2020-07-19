const express = require("express");
const router = express.Router();
const { authenticationHandlers } = require("../handlers");
router.post("/register", authenticationHandlers.register);

router.post("/login", authenticationHandlers.login);

module.exports = router;
