\c flex_logs_dev;

INSERT INTO exercises (name, exercise_type, muscle_group) VALUES
 ('Barbell Bench Press', 'Strength Training', 'Chest'),
 ('Machine Chest Press', 'Strength Training', 'Chest'),
 ('Barbell Squat', 'Strength Training', 'Quads, Glutes, Hamstrings'),
 ('Kettlebell Hike Swing', 'Strength Training', 'Glutes, Hamstrings, Full-Body'),
 ('Double Kettlebell Front Squat', 'Strength Training', 'Quads, Glutes, Hamstrings, Full-Body'),
 ('Machine Calf Raises', 'Strength Training', 'Calves'),
 ('Bent Over Barbell Row', 'Strength Training', 'Back'),
 ('BarBell Bicep Curls', 'Strength Training', 'Biceps'),
 ('Cable Biceps Curl', 'Strength Training', 'Biceps'),
 ('Standing Barbell Overhead Triceps Extension', 'Strength Training', 'Triceps'),
 ('Cable Tricep Extensions', 'Strength Training', 'Triceps'),
 ('Seated Barbell Shoulder Press', 'Strength Training', 'Shoulders'),
 ('Jump Rope', 'Cardio', 'Full-Body');

INSERT INTO logs (date, exercise_id, sets_reps, set1, set2, set3, set4) VALUES
 ('2023-05-14', 2, '4 x 4-5', 270, 270, 270, 270),
 ('2023-05-14', 11, '4 x 4-5', 72.5, 72.5, 72.5, 72.5),
 ('2023-05-14', 9, '4 x 4-5', 57.5, 57.5, 57.5, 57.5),
 ('2023-05-14', 4, '4 x 8-10', 70, 70, 70, 70),
 ('2023-05-14', 5, '4 x 4-5', 60, 60, 50, 50),
 ('2023-05-14', 6, '4 x 4-5', 290, 330, 330, 350);

INSERT INTO logs (date, exercise_id, description, sets_reps) VALUES
 ('2023-05-14', 13, 'Heavy Rope', '5 sets of 3 minutes');
  


