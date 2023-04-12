const Task = require('../models/taskModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

//so what do we do here? token? id

const getTasks = asyncHandler( async (req,res) =>{
    const tasks = await Task.find({user: req.user.id })

    res.status(200).json(tasks)
})

const addTask = asyncHandler( async (req,res) =>{
    const {text, complete} = req.body;
    if(!text){
        res.status(400).send('no task')
        throw new Error('there needs to be a task')
    }
    const task = await Task.create({
        text,
        complete,
        user: req.user.id,
    })
    if(task){
        res.status(200).send(task)
    }
})

const updateTask = asyncHandler( async (req,res) =>{
    // const {text, complete} = req.body;
    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(400)
        throw new Error('task not found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    if(task.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('user not authorized')
    }

    //how i wrote it
    // const updatedTask = await Task.findByIdAndUpdate({_id: req.params.id},{
    //     text,
    //     complete
    // },{new:true})
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    }) 


    res.status(200).json(updatedTask)
    
})

const deleteTask = asyncHandler( async (req,res) =>{
    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(400)
        throw new Error('task not found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    if(task.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('user not authorized')
    }

    // await task.remove();
     await Task.findByIdAndDelete(req.params.id)

    res.status(200).json({ id: req.params.id })
    // const deletedTask = await Task.findByIdAndDelete(req.params.id) 

    // if(deletedTask){
    //     res.status(200).send(`deleted task ${id}`)
    // }
    
    // res.status(400).send(`task not found`)
    // throw new Error('no task with that id')
})


module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
}