//serverside
const express = require('express');
//express is a simple server library downloaded fron npm
const app = express();

const serverInit = function () { //runs when server starts listening on port 3000
    console.log("Server started!")
};

app.listen(3000, serverInit);
app.use(express.static("client")); //tells express to serve the ./client folder when it recieves a request