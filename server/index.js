const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());


app.get("/check/2", (request, response) => {
    response.send("Hi there");
});
app.get("/", (request, response) => {
    response.send("Hi there");
});
app.listen(5001, () => {
    console.log("Listen on the port 5001...");
});