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
    date DATE NOT NULL,
    exercise_id INTEGER NOT NULL REFERENCES exercises (id),
    description TEXT,
    sets_reps TEXT NOT NULL,
    set1 NUMERIC,
    set2 NUMERIC,
    set3 NUMERIC,
    set4 NUMERIC,
    set5 NUMERIC,
    set6 NUMERIC
);