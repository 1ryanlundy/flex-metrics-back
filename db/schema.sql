DROP DATABASE IF EXISTS flex_logs_dev;
CREATE DATABASE flex_logs_dev;

\c flex_logs_dev;

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    exercise_type TEXT NOT NULL,
    muscle_group TEXT NOT NULL
);

CREATE TABLE logs (
    id SERIAL PRIMARY KEY,
    date DATE,
    exercise_id INTEGER NOT NULL REFERENCES exercises (id),
    set1 INTEGER NOT NULL,
    reps1 NUMERIC NOT NULL,
    set2 INTEGER NOT NULL,
    reps2 NUMERIC NOT NULL,
    set3 INTEGER NOT NULL,
    reps3 NUMERIC NOT NULL,
    set4 INTEGER, 
    reps4 NUMERIC,
    set5 INTEGER,
    reps5 NUMERIC,
    set6 INTEGER,
    reps6 NUMERIC
)
