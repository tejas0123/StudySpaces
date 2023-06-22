import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { StyledPopup } from '../styled/LoginPopup.styled';
import {context} from '../UseContext';

function LoginPopup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setLogin] = useContext(context);

  async function submit(e){
    e.preventDefault();
    if(email == '' || password == ''){
      setErrorText("*Please fill all the fields!");
    }
    else{
      try{
        setErrorText('');
        axios.defaults.withCredentials = true;
        axios.post("http://192.168.1.93:4000/login", {email, password})
        .then(res =>{
          setLogin(true);
          localStorage.setItem("isLoggedIn", 'true');
          console.log(res);
          if(res.data.valid){
            navigate('/');
          }
          else{
            setErrorText('Incorrect Username or Password');
            navigate('/signin');
          }
        })
      }
      catch(e){
        console.log(e);
      }
    }
  }

  return (
    <>
    <StyledPopup>
      <h1>Sign in</h1>
      <p>{errorText}</p>
      
      <form>
        <div className='formdiv'>
            <div className='formelements'>
                <label>Username or email address</label>
                <br/>
                <input name='email' placeholder='example@domain.com' type='email' onChange={(e) => {setEmail(e.target.value)}}></input>
            </div>
            <div className='formelements'>
                <label>Password</label>
                <br/>
                <input type='password' name='password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}></input>
            </div>
            <div className='formelements'><button type='submit' onClick={submit}>Sign in</button></div>
            <a href=''>Forgot Password?</a>
        </div>
      </form>
        
      <div className='newAccount'>
        Do not have an account? <a href='/createaccount'>Create an account.</a> 
      </div>
    
    </StyledPopup>
    </>
  )
}

export default LoginPopup
