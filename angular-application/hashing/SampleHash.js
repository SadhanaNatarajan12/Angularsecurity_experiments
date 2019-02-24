var crypto = require('crypto');
var password = 'secret';

var hash = crypto.createHash('sha256').update(password).digest('hex');

console.log("Hashed value = " + hash + "\n");
