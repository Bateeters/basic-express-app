// controller to find authors by their IDs

const db = require("../db");

const CustomNotFoundError = require("../errors/CustomNotFoundError")

const getBookById = async (req, res) => {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        throw new CustomNotFoundError("Book not found");
    }

    res.send(`Book Title: ${author.book}`);
};

module.exports = { getBookById };