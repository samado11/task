const express = require('express');
const router = express.Router();
const config = require('config');
// Item Model
const Item = require('../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items));
    
});


module.exports = router;
