const express = require("express");
const cors = require('cors');
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const socketIO = require("socket.io");
const codeRoutes = require("./routes/codeRouter");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/code", codeRoutes);
const PORT = 8000;
const MAX_STUDENTS_PER_CLASS = 1;

const server = http.createServer(app); //http server with express app

const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

app.get("/check/2", (request, response) => {
    response.send("Hi there");
});
app.get("/", (request, response) => {
    response.send("Hi there");
});
app.listen(5001, () => {
    console.log("Listen on the port 5001...");
});