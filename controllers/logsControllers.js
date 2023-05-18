const express = require("express");
const logs = express.Router();
const validateLog = require("../validations/validateLog")
const {
    getAllLogs,
    getLog,
    createLog,
    updateLog,
    deleteLog
} = require("../queries/logs");

// all
logs.get("/", async (req, res) => {
    const { error, allLogs } = await getAllLogs();
    if (error) {
        res.status(500).json({ error: error })
    } else {
        res.status(200).json(allLogs)
    }
});

// one
logs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, log } = await getLog(id);
    if (error) {
        res.status(500).json({ error: error })
    } else {
        res.status(200).json(log)
    }
});

// create
logs.post("/", validateLog, async (req, res) => {
    const { error, newLog } = await createLog(req.body);
    if (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    } else {
        res.status(201).json(newLog)
    }
});

// update
logs.put("/:id", validateLog, async (req, res) => {
    const { id } = req.params;
    const { error, updatedLog } = await updateLog(id, req.body);
    if (error) {
        res.status(500).json({ error: "Server Error" })
    } else {
        res.status(200).json({ updatedLog });
    }
});

// delete
logs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, deletedLog } = await deleteLog(id);
    if (error) {
        res.status(404).json("Log Not Found");
    } else {
        res.status(200).json(deletedLog);
    }
});

module.exports = logs;