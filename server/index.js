const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const PORT = config.get("serverPort");

const start = async () => {
    try {
        mongoose.connect(config.get("dbUrl"));



        app.listen(PORT, () => {
            console.log("Сервер запущен на порту: ", PORT)
        });
    }

    catch (e) {

    }
}

start();