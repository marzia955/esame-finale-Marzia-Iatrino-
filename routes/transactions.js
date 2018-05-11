var express = require('express');
var router = express.Router();
var account = require('../models/account');
var transaction = require('../models/transaction');

var auth = require('../middlewares/auth');




var ibanExists = function(req, res, next) {
  account.findOne({iban: req.body.iban}, function(err, account){
    if (account === null) {
      return res.status(404).json({message: 'Iban does not exist'})
    }  else {
      req.assigne = account;
      next();
    }
  })
}


var haveCredit = function(req, res, next) {
  if (account.money < transaction.amount) {
    return res.status(409).json({message: 'Do not have enough money'})
  }  else {
    next();
  }
}


router.post('/transaction', auth.verify, transaction.ibanExists, transaction.haveCredit,function(req, res) {
  var transaction = new transaction();
  transaction.account= req.account._id;
  transaction.assigne= req.assigne._id;
  transaction.amount= req.body.amount;
  req.account.money = parseInt(req.account.money) - parseInt(req.body.amount);
  req.assigne.money = parseInt(req.account.money) + parseInt(req.body.amount);
  req.account.save();
  req.assigne.save();
  transaction.save(function(err, transactionEffectuate) {
    if (err) return res.status(400).json(err);
    res.status(201).json(transactionEffectuate);
  })
})



module.exports.haveCredit = haveCredit;
module.exports.isIbanExisting = IbanExists;






module.exports = router;
