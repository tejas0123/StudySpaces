import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    
    display:flex;
    align-items:center;
    justify-content:space-around;

    h1{
        color: #1b5e20;
        font-family: 'Roboto', sans-serif;
        font-size: 35px;
        text-decoration: underline;
    }
    a{
        color:black;
        text-decoration:none;
        margin:0 1rem;
        font-size:18px;
        padding: 0px 15px;
        font-family: 'Roboto', sans-serif;   
    }
    
    a:hover{
        color:darkgreen;
        text-decoration: underline;
    }

    button{
        border:none;
        color:black;
        font-size:17px;  
    }
   

`
