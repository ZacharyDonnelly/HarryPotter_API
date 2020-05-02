const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: String,
  house: String,
  gender: String,
  actor: String,
  id: Number
});
module.exports = mongoose.model('Character', characterSchema);
