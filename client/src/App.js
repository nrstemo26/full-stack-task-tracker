import Header from './components/Header'
import Tasks from './components/Tasks'
import './App.css'

import {useState} from 'react';

const renderContent = {
  'get': <Tasks/>,
  'add': <h2>adding tasks</h2>,
  'login': <h2>user login stuff</h2>
}

function App() {
  const [activeTab, setActiveTab] = useState('get');
  return (
    <div className="App">

      <Header setActiveTab={setActiveTab}/>
      <h1>hello nathan</h1>

      {renderContent[activeTab]}
      
      
    </div>
  );
}

export default App;
