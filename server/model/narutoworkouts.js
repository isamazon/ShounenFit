import mongoose from 'mongoose';

const narutoWorkoutSchema = mongoose.Schema({
  title: String,
  author: String,
  name: String,
  pageLength: String,
  selectedFile: String,
  description: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const WorkoutSchema = mongoose.model('narutoWorkout', narutoWorkoutSchema);

export default WorkoutSchema;
