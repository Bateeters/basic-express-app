// controller to find authors by their IDs

const db = require("../db");

// this function is a controller (handles a specific action -> retrieving an author by ID)
async function getAuthorById(req, res) {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        res.status(404).send("Author not found");
        return;
    }

    res.send(`Author Name: ${author.name}`);
};

module.exports = { getAuthorById };