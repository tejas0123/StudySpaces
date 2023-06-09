import React from 'react'
import { StyledHomePage } from '../styled/Home.styled'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <StyledHomePage>
      <div className='inner'>
        <div className="text">
        <h1>Welcome to StudySpaces</h1>
        <p>The One platform for students and teachers for all their learning needs!</p>
        </div>
        <div><img src= {require("../images/draw3.png")}></img></div>
      </div>
    </StyledHomePage>
    </>
    
  )
}

export default Home
