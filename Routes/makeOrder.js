const express = require('express');
const router = express.Router();
const config = require('config');
// Item Model
const Order = require('../models/Order');
const Driver = require('../models/Driver');
// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.post('/', (req, res) => {
  const { phone, address, date,user_id } = req.body;

  const newOrder = Order.updateMany({ user_id: user_id },{assigned:"1"},req.body, function(err, res) {
    if (err) throw err;
  });


});

var getdrivers = function(callback) {
  Driver.find().exec(function(err, blogs) {
             blogs.reverse();
             callback(err, blogs);

});
}


module.exports = router;
