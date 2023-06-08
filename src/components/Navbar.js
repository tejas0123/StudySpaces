import React from 'react'
import { StyledNavbar } from '../styled/Navbar.styled'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';


axios.defaults.withCredentials = true;
function Navbar(){
  const[welcome, setWelcome] = useState('');
  const navigate = useNavigate();
  const[href, sethref] = useState('/signin');
  const[btnText, setBtnText] = useState('Sign In');
  useEffect(()=>{
    axios.get("http://localhost:4000/login")
    .then(res =>{
      console.log(res);
      if(res.data.valid){
        setWelcome("Welcome " + res.data.username);
        sethref('');
        setBtnText("Sign Out");
      } 
      else{
        navigate('/');
      }
    })
    .catch(err =>{
      console.log(err);
    })
  }, []);

  function logout()
  {
      axios.defaults.withCredentials = true;
      axios.get("http://localhost:4000/logout", {cookiename : "user_sid"}) //api call to clear the cookie on the server
      .then(res =>{
       console.log(res);
       navigate('/');
      });
  }
  
  return (
    <>
    <StyledNavbar>
      <h1>StudySpaces</h1>
      <div>
      <a href='/'>Home</a>
      <a href='/myspaces'>My Spaces</a>
      <a href=''>Task Stack</a>
      <a role = 'button' href = {href} className='loginbtn' onClick={logout}>{btnText}</a>
      </div>
      
    </StyledNavbar>
    <h2 style={{textAlign:'center', marginTop:"10px", color: "green"}}>{welcome}</h2>
    </>
  )
}

export default Navbar
