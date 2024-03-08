import React from 'react'
import './todocontainercomp.css'
import Mainlist from './mainlist'

function Todocontainercomp({todolist,settodolist }) {  
  const deletehandler=(id)=>{
     settodolist(prv =>prv.filter((t)=>t.id!==id))


  }
  return (
    <div className='todocontainer-div'>
            {
              todolist.map((task,index)=>(
    <Mainlist  key={index} content={task.task} date={task.date} id={task.id}  deletehandler={deletehandler}/>

              ))
            }
       

        </div>
  )
}

export default Todocontainercomp