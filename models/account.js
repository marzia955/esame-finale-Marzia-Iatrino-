const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = mongoose.Schema({
    name: {type:String, required: true},
    surname: {type:String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    iban: {type: String, unique: true, required: true},
    money: {type: Number, required: true},
    transactionsReceived: {type: Schema.Types.ObjectId, ref:'UserAccount', required: true},
    transactionsffectuate: {type: Schema.Types.ObjectId, ref:'UserAccount', required: true}

});


module.exports = mongoose.model('Account', accountSchema);


/*var Account = mongoose.model('Account', accountSchema);
module.exports = Account;*/
