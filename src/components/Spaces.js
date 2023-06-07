import React from 'react'
import Navbar from './Navbar'
import { StyledSpace } from '../styled/Spaces.styled'
import { useState } from 'react'
import { StyledPopup } from '../styled/LoginPopup.styled'

function Spaces() {
    const [visibility, setVisibility] = useState('hidden');
    const [name, setName] = useState('');
    const [creator, setCreator] = useState('');
    const [subject, setSubject] = useState('');
    const [desc, setDesc] = useState('');
    const [code, setCode] = useState('');

  return (
    <>
      <Navbar/>
      <StyledSpace>
      <button className='button' style={{"background-color": "blue"}} onClick={()=>setVisibility("visible")}> + Create Space</button>
      <button className='button'>Join</button>
      <form style={{"visibility":visibility}}>
        <div className='formdiv'>
        <h1>Create Space</h1>
            <div className='formelements'>
                <div className='innerdiv'>
                    <label>Name</label>
                    <input name='name' type='text' onChange={(e) => {setName(e.target.value)}}></input>
                    <label>Creator</label>
                    <input type='text' name='creator' onChange={(e) => {setCreator(e.target.value)}}></input>
                </div>
            </div>
          
            <div className='formelements'>
                <div className='innerdiv'>
                    <label>Subject</label>
                    <input type='text' name='subject' onChange={(e) => {setSubject(e.target.value)}}></input>
                    <label>Code</label>
                    <input type ='text' name='code' onChange={(e) => {setCode(e.target.value)}}></input>
                </div>
            </div>
            <div className='innerdiv'>
                <label>Description</label>
                <textarea style = {{"margin-left" : "10px", "margin-top":"10px", "background-color":"#ccff90", "font-size":"17px", "border-radius":"5px"}}type='text' name='desc' cols = "80" rows = "4" onChange={(e) => {setDesc(e.target.value)}}></textarea>
            </div>
            <br/>
            <div style={{"margin-left":"auto", "margin-right":"auto"}}>
            <button className = "createButton" type='submit'>Create</button>
            <button className = "createButton" onClick={()=>setVisibility("hidden")}>Close</button>
            </div>
            
        </div>
      </form>
      
      </StyledSpace> 
    </>
  )
}

export default Spaces
