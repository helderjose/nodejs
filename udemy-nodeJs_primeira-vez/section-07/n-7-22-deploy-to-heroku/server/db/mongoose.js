var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//para o Heroku
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
