const express = require('express');
const router = express.Router();
const config = require('config');
// Item Model
const Order = require('../models/Order');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.post('/', (req, res) => {
  const { item_id, user_id,phone,address,date,assigned } = req.body;
  const newOrder = new Order({
  item_id,
   user_id,
   phone,
   date,
   address,
   assigned
  });
newOrder.save()

});


module.exports = router;
