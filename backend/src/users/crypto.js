const crypto = require('crypto');


const senha = 'aFjLvM.UsinaEcoCultural030405';


const hash = crypto.createHash('sha256');


hash.update(senha);


const encodedPassword = hash.digest('hex');

console.log(encodedPassword); 