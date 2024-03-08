import React from 'react'
import './mainlist.css'
import deletecard from './assets/icons/delete.png'

const Mainlist = ({content,date,id,deletehandler}) => {
 
  
  return (
    <div className='mainlist-div'>
    <div>
    <h2>{content}</h2>
      <p> {date}</p>
    
    </div>
    <img src={deletecard} alt="delete-card"onClick={()=>deletehandler(id)} />
    </div>
  )
}

export default Mainlist