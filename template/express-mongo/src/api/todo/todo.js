const restful = require('node-restful')

// usa o node restful em cima do mongoose
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})


//exporta o todoSchema com o nome "Todo" para ser usando no todoService.js
module.exports = restful.model('Todo', todoSchema)