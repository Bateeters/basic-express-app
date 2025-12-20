const { Router } = require("express");

// importing controller for use
const { getBookById } = require('../controller/bookController');

const bookRouter = Router()

bookRouter.get("/", (req, res) => res.send("All books"));

// using the imported getAuthorById function to populate /authors/# route
bookRouter.get("/:authorId", getBookById);

module.exports = bookRouter;