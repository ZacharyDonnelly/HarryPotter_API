const mongoose = require('mongoose');
const { Schema } = mongoose;

const houseSchema = new Schema({
  name: String,
  id: Number,
});

const House = mongoose.model('House', houseSchema);
module.exports = House;
