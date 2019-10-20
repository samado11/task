const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  _id: {type:Schema.Types.ObjectId,ref:'Order' },
  name: {
    type: String,
    required: true
  },
  available_quantity: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
