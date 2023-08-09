const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.listen(5001, () => {
    console.log("Listen on the port 5001...");
});