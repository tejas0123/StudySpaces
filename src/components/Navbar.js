import React, { useContext } from 'react'
import { StyledNavbar } from '../styled/Navbar.styled'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {context} from '../UseContext';

function Navbar(props) {
  const [welcome, setWelcome] = useState('');
  const navigate = useNavigate();
  const [href, sethref] = useState('/signin');
  const [btnText, setBtnText] = useState('Sign In');
  const [isLoggedIn, setLogin] = useContext(context);
  console.log(typeof(setLogin));
  let loginStatus; 
   useEffect(() => {
    loginStatus = localStorage.getItem("isLoggedIn");
    
    if (isLoggedIn || loginStatus == "true") {
      console.log(loginStatus);
      axios.defaults.withCredentials = true;
      axios.get("http://localhost:4000/login")
        .then(res => {
          console.log(res);
          if (res.data.valid) {
            setLogin(true);
            setWelcome("Welcome " + res.data.username);
            sethref('');
            setBtnText("Sign Out");
          }
          else {
            navigate('/');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    else {
      axios.get("http://localhost:4000/login")
        .then(res => {
          console.log(res);
          if (res.data.valid) {
            setWelcome("Welcome " + res.data.username);
            sethref('');
            setBtnText("Sign Out");
          }
          else {
            navigate('/');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }

  }, [loginStatus]);

  const logout = () => {
    if (href == '') {
      axios.defaults.withCredentials = true;
      axios.get("http://localhost:4000/logout") //api call to clear the cookie on the server
        .then(res => {
          console.log(res);
          localStorage.setItem("isLoggedIn", false);
          setLogin(false);
          navigate('/');
        });
    }
  }

  return (
    <>
      <StyledNavbar>
        <h1>StudySpaces</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/myspaces'>My Spaces</Link>
          <Link to=''>Task Stack</Link>
          <a role='button' href={href} className='loginbtn' onClick={logout}>{btnText}</a>
        </div>

      </StyledNavbar>
      <h2 style={{ textAlign: 'center', marginTop: "10px", color: "green" }}>{welcome}</h2>
    </>
  )
}

export default Navbar
