const Task = require('../models/taskModel')
const asyncHandler = require('express-async-handler')

const getTasks = asyncHandler( async (req,res) =>{
    const tasks = await Task.find({})

    res.status(200).send(tasks)
})

const addTask = asyncHandler( async (req,res) =>{
    const {text, complete} = req.body;
    if(!text){
        res.status(400).send('no task')
        throw new Error('there needs to be a task')
    }
    const task = await Task.create({
        text,
        complete
    })
    if(task){
        res.status(200).send(task)
    }
})

const updateTask = asyncHandler( async (req,res) =>{
    const {text, complete} = req.body;
    const updatedTask = await Task.findByIdAndUpdate({_id: req.params.id},{
        text,
        complete
    },{new:true}) 

    if(updatedTask){
        res.status(200).send(updatedTask)
    }
    
    res.status(400).send(`task not found`)
    throw new Error('no task with that id')
})

const deleteTask = asyncHandler( async (req,res) =>{
    const deletedTask = await Task.findByIdAndDelete(req.params.id) 

    if(deletedTask){
        res.status(200).send(`deleted task ${id}`)
    }
    
    res.status(400).send(`task not found`)
    throw new Error('no task with that id')
})


module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
}