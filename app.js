const express = require('express')
const app = express();
const env = require('dotenv').config();
const port = process.env.PORT || 3000;

const taskRouter = require('./routes/taskRouter');

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/api/v1', taskRouter);




app.listen(port, ()=>{
    console.log('running on port ' + port)
})