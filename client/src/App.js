import Header from './components/Header'
import Tasks from './components/Tasks'
import AuthForm from  './components/AuthForm'
import AddTaskForm from './components/AddTaskForm'
import './App.css'

import {useState} from 'react';

const renderContent = {
  'get'  : <Tasks/>,
  'add'  : <AddTaskForm/>,
  'login': <AuthForm/>
}

function App() {
  const [activeTab, setActiveTab] = useState('get');
  return (
    <div className="App">

      <Header setActiveTab={setActiveTab}/>
      
      {renderContent[activeTab]}
      
      
    </div>
  );
}

export default App;
