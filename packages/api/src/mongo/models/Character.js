const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: String,
  house: String,
  gender: String,
  actor: String,
  id: Number,
});
const Character = mongoose.model('Character', characterSchema);
module.exports = Character;
