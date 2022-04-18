const dotenv = require('dotenv').config();
const express = require("express");
const cors = require('cors');
const api = require('./routes/api');
const connection = require("./database");
const app = express();

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials: true");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST, HEAD, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", api);

app.all("*", (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server!`
    })
});

const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});