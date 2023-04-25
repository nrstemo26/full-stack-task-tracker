import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks/'

const createTask = async (taskData, token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL, taskData, config);

    return response.data;
}

//get user data
const getTasks = async (token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL, config);
    
    return response.data;

}

const deleteTask = async (taskId, token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`,
        },
    }
    
    const response = await axios.delete(API_URL + taskId, config);
    
    return response.data;

}
const updateTask = async (taskData, token) => {
    const taskId = taskData._id;
        
    const config = {
        headers : {
            Authorization : `Bearer ${token}`,
        },
    }
    
    const response = await axios.patch(API_URL + taskId, taskData, config);
    
    return response.data;

}

const taskService = {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
}

export default taskService;