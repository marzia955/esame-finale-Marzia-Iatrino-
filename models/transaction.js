const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = mongoose.Schema({
    accountBenefactor: {type: Schema.Types.ObjectId, ref:'Account',required:true},
    accountAssigne: {type: Schema.Types.ObjectId, ref:'Account',required:true},
    amount: {type: Number, required: true}
});


module.exports = mongoose.model('Transaction', transactionSchema);
