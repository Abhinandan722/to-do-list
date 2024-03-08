import logo from './logo.svg';
import './App.css';
import Titlecomponent from './component/titlecomponent';
import Mainlist from './component/mainlist';
import Todocontainercomp from './component/todocontainercomp';
import { useState } from 'react';

function App( ) {
  const [todolist,setTodolist]=useState([])
    


  return (
    <div className='appjs-div'>
      <Titlecomponent todolist={todolist} settodolist={setTodolist}  />
      <Todocontainercomp todolist={todolist} settodolist={setTodolist}   />
      
    </div>
  );
}

export default App;
