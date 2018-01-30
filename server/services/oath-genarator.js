const oathes = require('../data/oath.json');
const { randomOfArray } = require('./util');
function generateOath(type) {
    type = santizeType(type) || randomOfArray(Object.keys(oathes));
    return randomOfArray(oathes[type]);
}


function santizeType(type) {
    const isValidType = Object.keys(oathes).indexOf(type) > -1;
    if (isValidType) {
        return type;
    }
    return false;
}
module.exports = generateOath;