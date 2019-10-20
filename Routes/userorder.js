const express = require('express');
const router = express.Router();
const config = require('config');
// Item Model
const Order = require('../models/Order');
const Item = require('../models/Item');
// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.post('/', (req, res) => {
  const { id } = req.body;
  console.log(id);
  getorder(id, function(err, data){
      if (err) {
          console.log(err);
          return res(err);
      } else {
          console.log(data);

          return res.json(data);
      }
  });
});


var getorder = function(id, cb) {
  var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("OrderSystem");
  dbo.collection('orders').aggregate([
    { $match:
      {
        user_id:String(id),
        assigned:"0"
      }
    },
    { $lookup:
      {
        from: 'items',
        localField: 'item_id',
        foreignField: '_id',
        as: 'orderdetails'
      }
    }
  ]).toArray(cb);
});
   }



module.exports = router;
