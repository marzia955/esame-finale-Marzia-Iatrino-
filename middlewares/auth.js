var account = require('../models/account');
var jwt = require('jwt-simple');
var secret = 'xxx';


var verify = function(req, res, next) {
    if (req.query.token === undefined) return res.status(401).json({message:' Do not Unothorized'})
    var id = jwt.decode(req.query.token, secret);
    account.findById(id, function(err, account) {
        if (err) return res.status(500).json({message: err});
        req.account = account;
        next();
    })
}
module.exports.verify = verify;
module.exports.secret = secret;
