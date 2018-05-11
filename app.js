var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MarziaIatrinoBackend');
var index = require('./routes/index');
var transactions = require('./routes/transactions');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/transactions', transactions);
app.use('/', index);


var port = 3001;
app.listen(port, ()=>
{console.log("server start at port:", port)})
module.exports = app;
