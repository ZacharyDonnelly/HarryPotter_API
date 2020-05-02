const mongoose = require('mongoose');
const { Schema } = mongoose;

const houseSchema = new Schema({
  name: String,
  id: Number
});

module.exports = mongoose.model('House', houseSchema);
