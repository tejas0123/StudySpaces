import React from 'react'
import { StyledNavbar } from '../styled/Navbar.styled'
function Navbar() {
  return (
    <>
    <StyledNavbar>
      <h1>StudySpaces</h1>
      <div>
      <a href=''>Home</a>
      <a href=''>Write an article</a>
      <a href=''>Latest</a>
      <a role='button' href = "/signin" className='loginbtn'>Sign In</a>
      </div>
      
    </StyledNavbar>
    </>
  )
}

export default Navbar
