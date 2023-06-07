import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { StyledNavbar } from '../styled/Navbar.styled'
function Navbar() {
  return (
    <>
    <StyledNavbar>
      <h1>StudySpaces</h1>
      <div>
      <Link to='/'>Home</Link>
      <Link to='/mySpaces'>My Spaces</Link>
      <Link to=''>TaskStack</Link>
      <Link to=''>Assignments</Link>
      <Link role='button' to = "/signin" className='loginbtn'>Sign In</Link>
      </div>
      
    </StyledNavbar>
    </>
  )
}

export default Navbar
