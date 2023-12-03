const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");

const app = express();
const PORT = config.get("serverPort");


app.use(cors());
const userRouter = require("./routes/user.routes");
const noteRouter = require("./routes/note.routes");

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/note", noteRouter);

app.get("/", (req, res) => {
    res.send("Server started")
})

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