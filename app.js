const express = require('express');
const jwt = require('jsonwebtoken');
const app=express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');
// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
next();
});
// Routes
app.use('/users/register', require('./Routes/register.js'));
app.use('/users/login', require('./Routes/login.js'));
app.use('/items', require('./Routes/items.js'));
app.use('/order', require('./Routes/userorder.js'));
app.use('/add', require('./Routes/add.js'));
app.use('/makeOrder', require('./Routes/makeOrder.js'));

app.get('/api',(req,res)=>{
  res.json({
    message:'welcome to api'
  });
});

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log('server listen to port 5000'));
