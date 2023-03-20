const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const tokenText = document.getElementById('token-text')
let JWTtoken;

const taskDescription = document.getElementById('task');
const complete = document.getElementById('complete');
const addTask = document.getElementById('add-task')

// const getAllBtn = document.getElementById('get-all-btn')


const tasksContainer = document.getElementsByClassName('tasks-container')[0]
 
const getAllTasks = async () =>{
    
    await axios.get('http://localhost:5000/api/tasks/', {
        headers:{
            authorization: 'Bearer ' + JWTtoken
        }
    }).then(res=>{
        makeTasks(res.data)
    }).catch(err => console.error(err))
        
}

function addMultipleEventListeners(arr,handler){
    arr.forEach(x=>{
        x.addEventListener('click', handler)
    })
}


function clearTasks(){
    tasksContainer.innerHTML = "";
}


function makeTask(task){
    const div1 = document.createElement('div')
    div1.classList.add('task-item-container')
    const header = document.createElement('h1')
    const headerNode = document.createTextNode(task.text)
    header.appendChild(headerNode)
    
    idElement = document.createElement('p')
    const idNode = document.createTextNode('id: ' + task._id)
    idElement.appendChild(idNode)
    
    const complete = document.createElement('div')
    complete.classList.add('checkbox-container')
    const completeLabel = document.createElement('label')
    completeLabel.for = 'complete'
    const completeLabelNode = document.createTextNode('Complete? ')
    completeLabel.appendChild(completeLabelNode)
    


    const completeCheck = document.createElement('input')
    completeCheck.setAttribute("type", "checkbox");
    completeCheck.checked = task.complete
    completeCheck.classList.add('completed-task-check')
    complete.appendChild(completeLabel);
    complete.appendChild(completeCheck);
    
    // <div class="checkbox-container">
    //     <label for="complete">Completed? </label>
    //     <input type="checkbox" class="completed-task-check">
    //  </div>
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    const deleteNode = document.createTextNode('X')
    deleteBtn.appendChild(deleteNode)
    
    // const updateBtn = document.createElement('button')
    // updateBtn.classList.add('edit-btn')
    // const updateNode = document.createTextNode('edit')
    // updateBtn.appendChild(updateNode)
    
    div1.appendChild(header);
    div1.appendChild(idElement);
    div1.appendChild(complete)
    // div1.appendChild(completeCheck)
    div1.appendChild(deleteBtn)
    // div1.appendChild(updateBtn)
    tasksContainer.appendChild(div1)
}


async function makeTasks(tasksArray){
    clearTasks();
    tasksArray.forEach(task=>{
        makeTask(task)
    })

    deleteBtns = Array.from(document.getElementsByClassName('delete-btn'))
    checkboxArr = Array.from(document.getElementsByClassName('completed-task-check'))
    addMultipleEventListeners(deleteBtns, deleteClickHandler)
    addMultipleEventListeners(checkboxArr, editClickHandler )
}


async function addTaskHandler (e){
    e.preventDefault();

    try{
        await axios.post('http://localhost:5000/api/tasks/',{
            text: taskDescription.value, 
            complete: complete.checked,
        },{
            headers:{
                'authorization':'Bearer ' + JWTtoken
            }  
        })
    }catch(err){
        console.error(err);
    }
    getAllTasks();
}

async function loginHandler(e){
    e.preventDefault();
    
    try{
        await axios.post('http://localhost:5000/api/users/login',{
            email: email.value,
            password: password.value
        })
        .then(res => {
            JWTtoken = res.data.token        
            tokenText.innerHTML = JWTtoken;
        })
    }catch(e){
        err =>  console.error(err)
    }
    getAllTasks()
}

async function deleteClickHandler(e){
    let parent = e.target.parentNode;
    let taskId = Array.from(parent.childNodes)[1].innerText.split(' ')[1];
    
    try{
        await axios.delete(`http://localhost:5000/api/tasks/${taskId}`,{
            headers:{
                authorization: 'Bearer ' + JWTtoken
            }
        })
    }catch(e){
        console.log(e);
    }
    getAllTasks() 
}

async function editClickHandler(e){
    let checkboxDiv = e.target.parentNode;
    let taskDiv = checkboxDiv.parentNode;
    let taskId = Array.from(taskDiv.childNodes)[1].innerText.split(' ')[1];    
    let taskComplete = Array.from(checkboxDiv.childNodes)[1].checked;
    
    try{        
        await axios.patch(`http://localhost:5000/api/tasks/${taskId}`,{
            complete: taskComplete
            // complete: taskComplete == 'true' ? false : true
        },
        {   
            headers:{
                authorization: 'Bearer ' + JWTtoken
            }
        })
    }catch(e){
        console.log(e);
    }

    getAllTasks();
}

addTask.addEventListener('submit', addTaskHandler)
login.addEventListener('submit',loginHandler)
// getAllBtn.addEventListener('click', getAllTasks)



//token gets handled in the headers of the options if we do anything with it in the front end

// let authConfig = {
    //     headers:{
        //         authorization: 'Bearer ' + JWTtoken
//     }
// }