"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.use(express.json());
app.get("/", function (req, res) {
    return res.send("Ok");
});
app.get("/teste", function (req, res) {
    return res.status(200).json({
        message: "Alteração no codigo de Teste"
    });
});
app.get("/newcontent", function (req, res) {
    return res.status(200).json({
        message: "Testanto auto Pull"
    });
});
app.get("/new", function (req, res) {
    return res.status(200).json({
        message: "Novo Conteudo!"
    });
});
app.listen(3030, function () { return console.log("Server is init..."); });
