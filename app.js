const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

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
    res.status(500).send(err);
});