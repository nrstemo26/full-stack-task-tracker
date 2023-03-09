const Task = require('../models/taskModel')
const asyncHandler = require('express-async-handler')

const getTasks = asyncHandler( async (req,res) =>{
    const tasks = await Task.find({})

    res.send(tasks)
})

const addTask = (req,res) =>{
    res.send('add task')
}
const updateTask = (req,res) =>{
    res.send(`update id ${req.params.id}`)
}
const deleteTask = (req,res) =>{
    res.send(`delete id ${req.params.id}`)
}


module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
}