import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { StyledSpace } from '../styled/Spaces.styled'
import { useState } from 'react'
import { StyledPopup } from '../styled/LoginPopup.styled'
import axios from 'axios'

function Spaces() {
  const [visibility, setVisibility] = useState('hidden');
  const [name, setName] = useState('');
  const [creator, setCreator] = useState('');
  const [subject, setSubject] = useState('');
  const [desc, setDesc] = useState('');
  const [code, setCode] = useState('');
  const [zindex, setZindex] = useState(-1);
  const [classCode, setclassCode] = useState('');
  const [joinFormVisibility, setJoinFormVisibility] = useState('');

  useEffect()
  {
    axios.get("http://localhost:4000/fetchAllSpaces")
    .then(res=>{
      
    })
  }
  async function submit(e)
  {
    let students = [];
    axios.post("http://localhost:4000/newSpace", {name, creator, subject, code, desc,students})
    .then(res=>{
      console.log("hi");
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    });
  }

  async function join(e)
  {
    axios.post("http://localhost:4000/joinSpace", {classCode})
    .then(result=>{
      if(result.data.joined){
        console.log("Joined Successfully");
      }
    })
    .catch(err=>{console.log(err)});
  }
  
  //create class form
  if (visibility == 'visible') {
    return (
      <>

        <Navbar />
        <StyledSpace>
          <button className='button' style={{ "background-color": "blue" }} onClick={() => { setVisibility("visible"); setZindex(2) }}> + Create Space</button>
          <button className='button'>Join</button>

          <form style={{ "visibility": visibility }}>
            <div className='formdiv'>
              <h1>Create Space</h1>
              <div className='formelements'>
                <div className='innerdiv'>
                  <label>Name</label>
                  <input name='name' type='text' onChange={(e) => { setName(e.target.value) }}></input>
                  <label>Creator</label>
                  <input type='text' name='creator' onChange={(e) => { setCreator(e.target.value) }}></input>
                </div>
              </div>

              <div className='formelements'>
                <div className='innerdiv'>
                  <label>Subject</label>
                  <input type='text' name='subject' onChange={(e) => { setSubject(e.target.value) }}></input>
                  <label>Code</label>
                  <input type='text' name='code' onChange={(e) => { setCode(e.target.value) }}></input>
                </div>
              </div>
              <div className='innerdiv'>
                <label>Description</label>
                <textarea style={{ "margin-left": "10px", "margin-top": "10px", "background-color": "#ccff90", "font-size": "17px", "border-radius": "5px" }} type='text' name='desc' cols="80" rows="4" onChange={(e) => { setDesc(e.target.value) }}></textarea>
              </div>
              <br />
              <div style={{ "margin-left": "auto", "margin-right": "auto" }}>
                <button className="createButton" type='submit' onClick={submit}>Create</button>
                <button className="createButton" onClick={() => setVisibility("hidden")}>Close</button>
              </div>

            </div>
          </form>
        </StyledSpace>
      </>
    )
  }

  //join class form
  else if (joinFormVisibility == 'visible') {
    return (
      <>

        <Navbar />
        <StyledSpace>
          <button className='button' style={{ "background-color": "blue" }} onClick={() => { setVisibility("visible"); setZindex(2) }}> + Create Space</button>
          <button className='button'>Join</button>

          <form style={{ "visibility": joinFormVisibility }}>
            <div className='formdiv' style={{ "width": "20%", "display":"flex", "flexDirection":"column", "alignItems":"center"}}>
              <h1>Join Space</h1>
              <div>
              <label style={{"marginRight":"10px"}}>Join</label>
              <input name='classCode' type='text' onChange={(e) => { setclassCode(e.target.value) }} style={{"width":"40%", "margin-left": "auto", "margin-right": "auto"}}></input>
              </div>
              <div style={{ "margin-left": "auto", "margin-right": "auto" }}>
                <button className="createButton" type='submit' onClick={join}>Join</button>
                <button className="createButton" onClick={() => setJoinFormVisibility("hidden")}>Close</button>
              </div>
              </div>
              
          </form>
        </StyledSpace>
      </>
    )
  }

  //normal page
  else {
    return (
      <>
        <Navbar />
        <StyledSpace>
          <button className='button' style={{ "background-color": "blue" }} onClick={() => { setVisibility("visible"); setZindex(2) }}> + Create Space</button>
          <button className='button' onClick={()=> {setJoinFormVisibility("visible"); setZindex(2)}}>Join</button>

          <div className='container'>
            <div className="card">
              <h2>Name</h2>
              <div className='card-element'>
                <img src={require('../images/teacher.png')} width="40px" height="40px"></img>
                <p>Creator</p>
              </div>
              <div className='card-element'>
              <img src={require('../images/subject.png')} width="40px" height="40px"></img>
                <p>Subject</p>
              </div>
              <p className='code'><b>Code</b> : 45446464</p>
              <p className='desc'>description of the study space.description of the study space.description of the study space.description of the study space.description of the study space.</p>
            </div>
          </div>
        </StyledSpace>
      </>)
  }

}

export default Spaces
