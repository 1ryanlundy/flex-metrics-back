const express = require("express");
const cors = require("cors");
const exercisesController = require("./controllers/exercisesControllers");
const logsController = require("./controllers/logsControllers")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to FlexMetrics!")
});

app.use("/exercises", exercisesController);

app.use("/logs", logsController);

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
});

module.exports = app;