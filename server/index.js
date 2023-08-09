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
const PORT = 8000;
const MAX_STUDENTS_PER_CLASS = 1;

const server = http.createServer(app); //http server with express app

const io = socketIO(server, {
    cors: {
        origin: "*",
    },
});

app.use("/code", codeRoutes);


mongoose
  .connect(
    "mongodb+srv://mika80666:iL30iQ2Y2R166ODw@cluster0.6skunbx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB successfully");
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });  
});