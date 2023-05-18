const express = require("express");
const exercises = express.Router();
const validateExercise = require("../validations/validateExercise")
const {
    getAllExercises,
    getExercise,
    createExercise,
    updateExercise,
    deleteExercise
} = require("../queries/exercises");
const { result } = require("../db/dbConfig");

// all
exercises.get("/", async (req, res) => {
    const { error, allExercises } = await getAllExercises();
    if (error) {
        res.status(500).json({ error: "Server Error" });
    } else {
        res.status(200).json(allExercises);
    }
});

// one
exercises.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, exercise } = await getExercise(id);
    if (error?.code === 0) {
        res.status(404).json({ error: "Exercise Not Found" });
    } else if (error) {
        res.status(500).json({ error: "Server Error" })
    } else {
        res.status(200).json(exercise);
    }
})

// create
exercises.post("/", validateExercise, async (req, res) => {
    const { error, newExercise } = await createExercise(req.body);
    if (error) {
        res.sendStatus(500).json({ error: "Server Error" });
    } else {
        res.status(201).json(newExercise);
    }
});

// update
exercises.put("/:id", validateExercise, async (req, res) => {
    const { id } = req.params;
    const { error, updatedExercise } = await updateExercise(id, req.body);
    if (error) {
        res.status(500).json({ error: error });
    } else {
        res.status(200).json(updatedExercise)
    }
});

// delete
exercises.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, deletedExercise } = await deleteExercise(id);
    if (error) {
        res.status(404).json("Exercise Not Found");
    } else {
        res.status(200).json(deletedExercise);
    }
});

module.exports = exercises;