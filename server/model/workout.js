import mongoose from 'mongoose';

const workOutSchema = mongoose.Schema({
  animeTitle: String,
  bodyPart: String,
  picture: String,
  workoutDesc: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('workoutSchema', workOutSchema);
