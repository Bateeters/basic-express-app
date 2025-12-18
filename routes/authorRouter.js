const { Router } = require("express");

// importing controller for use
const { getAuthorById } = require('../controller/authorController');

const authorRouter = Router()

authorRouter.get("/", (req, res) => res.send("All authors"));

// using the imported getAuthorById function to populate /authors/# route
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;