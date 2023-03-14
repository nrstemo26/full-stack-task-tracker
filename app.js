const express = require('express')
const app = express();
const env = require('dotenv').config();
const port = process.env.PORT || 3000;

const connect = require('./db/connect')

const taskRouter = require('./routes/taskRouter');
const authRouter = require('./routes/authRouter');

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/api/users', authRouter);
app.use('/api/tasks', taskRouter);


try{
    connect(process.env.MONGO_URI)
    app.listen(port, ()=>{
        console.log('db connected and running on port ' + port)
    })

}catch(e){
    console.error('unexpected ' + e);
}