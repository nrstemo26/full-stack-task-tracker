const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    text: {
        type: String
    },
    complete:{
        type: Boolean
    }
})

module.exports = mongoose.model('Task', taskSchema)