const getTask = (req,res) =>{
    res.send('yoo in the controller')
}
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
    getTask,
    addTask,
    updateTask,
    deleteTask,
}