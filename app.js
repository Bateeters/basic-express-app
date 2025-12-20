const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/*
=========================================
Commented out to enable EJS views/routing
=========================================
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);
*/

app.get("/", (req, res) => {
    res.render("index", { message: "EJS Rocks!"});
});

const PORT = 3000;
app.listen(PORT, (error) => {
    // This is important!
    // without this, any startup errors will silently fail
    // instead of giving you a helpful error message.
    if (error) {
        throw error;
    }

    console.log(`My first Express app - listening on port ${PORT}`);
});

app.use((req, res, next) => {
    throw new Error("OH NO!");
    // or next(new Error("OH NO!"));
});

// Every thrown error in the application or the previous middleware functions 
// calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
    console.error(err);
    // We can now specify the 'err.statusCode' that exists in our custom error class
    // and if it does not exist it's probably an internal server error
    res.status(err.statusCode || 500).send(err.message);
});