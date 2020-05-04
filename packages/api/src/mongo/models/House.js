import mongoose from 'mongoose';

const houseSchema = new mongoose.Schema({
  name: String,
  id: Number,
});

export default mongoose.model('House', houseSchema, 'Houses');
