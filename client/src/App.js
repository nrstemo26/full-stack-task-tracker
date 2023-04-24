import Header from './components/Header'
import Tasks from './components/Tasks'
import AuthForm from  './components/AuthForm'
import AddTaskForm from './components/AddTaskForm'

import {useState} from 'react';

import './App.css'

const renderContent = {
  'get'  : <Tasks/>,
  'add'  : <AddTaskForm/>,
  'login': <AuthForm/>
}

function App() {
  const [activeTab, setActiveTab] = useState('add');
  
  return (
    <div className="App">
      <Header setActiveTab={setActiveTab}/>
      {renderContent[activeTab]} 
      
    </div>
  );
}

export default App;
