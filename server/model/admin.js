import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  color: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model('Admin', adminSchema);
