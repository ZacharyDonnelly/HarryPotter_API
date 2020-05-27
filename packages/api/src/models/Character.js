import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
  name: String,
  house: String,
  gender: String,
  actor: String,
  id: Number,
});
export default mongoose.model('Character', characterSchema, 'Character');
