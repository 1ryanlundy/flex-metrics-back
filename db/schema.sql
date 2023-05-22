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
    exercise_name TEXT NOT NULL,
    description TEXT,
    sets_reps TEXT NOT NULL,
    set1 TEXT NULL,
    set2 TEXT NULL,
    set3 TEXT NULL,
    set4 TEXT NULL,
    set5 TEXT NULL,
    set6 TEXT NULL
);