// controller to find authors by their IDs

const db = require("../db");

// this function is a controller (handles a specific action -> retrieving an author by ID)
async function getAuthorById(req, res) {
    const { authorId } = req.params;

    // adding a try/catch block to handle errors
    try {
        const author = await db.getAuthorById(Number(authorId));

        if (!author) {
            res.status(404).send("Author not found");
            return;
        }

        res.send(`Author Name: ${author.name}`);
    } catch (error) {
        console.lerror("Error retrieving author:", error);
        res.status(500).send("internal Server Error");

        // or we can call next(error) instead of sending a response here
        // Using `next(error)` however will only render an error page in the express' default view and respond with the whole html to the client.
        // So we will need to create a special type of middleware function if we want a different response and we will get to that... next.
    }
};

module.exports = { getAuthorById };