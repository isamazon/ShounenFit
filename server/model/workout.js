import mongoose from 'mongoose';

const workOutSchema = mongoose.Schema({
  animeTitle: String,
  bodyPart: String,
  type: String,
  picture: String,
  workoutDesc: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const WorkoutModel = mongoose.model('workoutSchema', workOutSchema);

export default WorkoutModel;
