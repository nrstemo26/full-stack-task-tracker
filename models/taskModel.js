const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    body: {
        type: String
    },
    complete:{
        type: Boolean
    }
})

module.exports = mongoose.model('Task', taskSchema)