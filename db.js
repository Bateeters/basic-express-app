// quick mock database for testing purposes
const authors = [
    { id: 1, name: "Bryan", book: "Into the Breach" },
    { id: 2, name: "Christian", book: "Purple: The Color of Royalty" },
    { id: 3, name: "Jason", book: "I Ran Out of Titles" },
];

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
};

module.exports = { getAuthorById };