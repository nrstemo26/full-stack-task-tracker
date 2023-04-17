const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    }
})

module.exports = mongoose.model('Task', taskSchema)