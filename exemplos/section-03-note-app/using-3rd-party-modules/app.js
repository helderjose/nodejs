
// https://lodash.com/docs
const _ = require('lodash'); // mesmo nome do package.json

console.log(_.isString(true)); // false
console.log(_.isString('Andrew')); // true

var filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4]);//retorna um array com itens únicos (sem repetição).
console.log(filteredArray);