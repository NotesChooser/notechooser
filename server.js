//serverside
const PORT = 3000;
const express = require('express'); // lightweight server library
const app = express();

const serverInit = function () { // runs on server start
    console.log(`Server started! http://localhost:${PORT}`);
};

app.listen(PORT, serverInit);
app.use(express.static("client")); // serve ./client