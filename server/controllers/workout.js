import mongoose from 'mongoose';
import WorkoutModel from '../model/workout.js';

// function to retrieve workout
export const getWorkout = async (req, res) => {
  try {
    const postWorkout = await WorkoutModel.find({ creator: req.userId });
    console.log(postWorkout);
    res.status(200).json(postWorkout);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Functionality to add/create new workout
export const createWorkout = async (req, res) => {
  const workoutData = req.body;

  const newWorkoutPost = new WorkoutModel({
    ...workoutData,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newWorkoutPost.save();

    res.status(201).json(newWorkoutPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// Delete Workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await WorkoutModel.findByIdAndRemove(id);

  res.json({ message: 'Workout deleted successfully.' });
};
