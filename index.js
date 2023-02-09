"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.use(express.json());
app.get("/", function (req, res) {
    return res.send("Ok");
});
app.get("/teste", function (req, res) {
    return res.send().json({
        message: "Hellou Word!"
    });
});
app.listen(3030, function () { return console.log("Server is init..."); });
