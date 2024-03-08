import React, { useState } from 'react'
import './titlecomponent.css'
import moment from 'moment'
import {v4 as uuidv4} from 'uuid'

function Titlecomponent({todolist,settodolist}) {
    const[task,setTask]=useState("")
    
   
    function submithandler(event){
        event.preventDefault()

          
          settodolist((prev)=>[
           {
            id:uuidv4(),
      task:task,
      date: moment().format('Do MMMM YYYY,')
           },...prev 

          ])
          setTask("")

        

       
    }
  return (

    <div className='titlecomponent-div'>
        <h1> Todo List</h1>
        <form action="" onSubmit={submithandler}>

        <input className='input' type="text" placeholder='inter any text' value={task}  onChange={(e)=>setTask(e.target.value)} />

        </form>
    
    </div>
  )
}

export default Titlecomponent