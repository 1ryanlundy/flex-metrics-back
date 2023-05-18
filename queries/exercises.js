const db = require("../db/dbConfig");

// all
const getAllExercises = async () => {
    try {
        const allExercises = await db.any('SELECT * FROM exercises');
        return { allExercises };
    } catch (error) {
        return { error };
    }
};

// one
const getExercise = async (id) => {
    try {
        const exercise = await db.any('SELECT * FROM exercises WHERE id=$1', id);
        return { exercise };
    } catch (error) {
        return { error: error };
    }
};

// create
const createExercise = async (exercise) => {
    try {
        const newExercise = await db.one(
            `INSERT INTO
             exercises (name, exercise_type, muscle_group)
             VALUES
             ($1, $2, $3)
             RETURNING *`,
            [exercise.name, exercise.exercise_type, exercise.muscle_group]
        );
        return { newExercise }
    } catch (error) {
        return { error: error }
    }
};

// update
const updateExercise = async (id, exercise) => {
    try {
        const updatedExercise = await db.one(
            `UPDATE exercises SET name=$1, exercise_type=$2, muscle_group=$3 WHERE id=$4 RETURNING *`,
            [exercise.name, exercise.exercise_type, exercise.muscle_group, id]
        );
        return { updatedExercise };
    } catch (error) {
        return { error: error }
    }
};

// delete
const deleteExercise = async (id) => {
    try {
        const deletedExercise = await db.one('DELETE FROM exercises WHERE id=$1 RETURNING *', id);
        return { deletedExercise };
    } catch (error) {
        return { error: error }
    }
};


module.exports = {
    getAllExercises,
    getExercise,
    createExercise,
    updateExercise,
    deleteExercise
}