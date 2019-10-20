const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({

  item_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:'Item'
  },
  user_id: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  assigned: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
