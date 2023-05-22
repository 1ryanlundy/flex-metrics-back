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
 ('Jump Rope', 'Cardio', 'Full-Body'),
 ('Dumbbell Bench Press', 'Strength Training', 'Chest'),
 ('Dumbbell Rotational Punch', 'Strength Training', 'Shoulders'),
 ('Dumbbell Hammer Curls', 'Strength Training', 'Biceps'),
 ('Standing Dumbbell OverHead Tricep Extensions', 'Strength Training', 'Triceps');

INSERT INTO logs (date, exercise_name, sets_reps, set1, set2, set3, set4) VALUES
 ('2023-05-18', 'Barbell Squat', '4 x 4-5', 245, 255, 265, 255),
 ('2023-05-18', 'Dumbbell Bench Press', '4 x 4-5', 75, 75, 75, 75),
 ('2023-05-18', 'Dumbbell Rotational Punch', '4 x 4-5', 17.5, 17.5, 20, 20),
 ('2023-05-18', 'Dumbbell Hammer Curls', '4 x 4-5', 40, 40, 40, 40),
 ('2023-05-18', 'Standing Dumbbell OverHead Tricep Extensions', '4 x 4-5', 70, 70, 70, 70),
 ('2023-05-14', 'Machine Chest Press', '4 x 4-5', 270, 270, 270, 270),
 ('2023-05-14', 'Cable Tricep Extensions', '4 x 4-5', 72.5, 72.5, 72.5, 72.5),
 ('2023-05-14', 'Cable Biceps Curl', '4 x 4-5', 57.5, 57.5, 57.5, 57.5),
 ('2023-05-14', 'Kettlebell Hike Swings', '4 x 8-10', 70, 70, 70, 70),
 ('2023-05-14', 'Double Kettlebell Front Squat', '4 x 4-5', 60, 60, 50, 50),
 ('2023-05-14', 'Machine Calf Raises', '4 x 4-5', 290, 330, 330, 350);

INSERT INTO logs (date, exercise_name, description, sets_reps) VALUES
 ('2023-05-14', 'Jump Rope', 'Heavy Rope', '5 sets of 3 minutes');
  


