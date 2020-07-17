const express = require("express");
const userRouter = require("../routes/user");
const authRouter = require("../routes/auth");
const recipesRouter = require("../routes/recipes");
const dbRouter = require("../routes/db");

const mainRouter = express.Router();


const validateLogin = (req,res,next) => {
    if(req.session.user_id==null)
        res.status(403).send({message:"unauthorized access"})
}

mainRouter.use("/recipes", recipesRouter);
mainRouter.use("/auth", authRouter);
mainRouter.use(validateLogin)
mainRouter.use("/user/:userId", userRouter); // TODO: assure cookie session for user first
mainRouter.use("/db", dbRouter);



module.exports = mainRouter;
