const db = require("../db/dbConfig");

// all
const getAllLogs = async () => {
    try {
        const allLogs = await db.any('SELECT * FROM logs')
        return { allLogs }
    } catch (error) {
        return { error: error }
    }
};

// one
const getLog = async (id) => {
    try {
        const log = await db.any('SELECT * FROM logs WHERE id=$1', id)
        return { log }
    } catch (error) {
        return { error: error }
    }
};

// create
const createLog = async (log) => {
    try {
        const newLog = await db.one(
            `INSERT INTO
             logs (date, exercise_name, description, sets_reps, set1, set2, set3, set4, set5, set6)
             VALUES
             ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
             RETURNING *`,
            [log.date, log.exercise_name, log.description, log.sets_reps, log.set1, log.set2, log.set3, log.set4, log.set5, log.set6]
        );
        return { newLog }
    } catch (error) {
        console.log(error)
        return { error: error }
    }
};

// update
const updateLog = async (id, log) => {
    try {
        const updatedLog = await db.one(
            `UPDATE logs SET date=$1, exercise_id=$2, description=$3, sets_reps=$4, set1=$5, set2=$6, set3=$7, set4=$8, set5=$9, set6=$10
             WHERE id=$11 RETURNING *`,
            [log.date, log.exercise_id, log.description, log.sets_reps, log.set1, log.set2, log.set3, log.set4, log.set5, log.set6, id]
        );
        return { updatedLog }
    } catch (error) {
        return { error: error }
    }
}

// delete
const deleteLog = async (id) => {
    try {
        const deletedLog = await db.one(
            'DELETE FROM logs WHERE id=$1 RETURNING *',
            id
        );
        return { deletedLog }
    } catch (error) {
        return { error: error }
    }
};

module.exports = {
    getAllLogs,
    getLog,
    createLog,
    updateLog,
    deleteLog
}