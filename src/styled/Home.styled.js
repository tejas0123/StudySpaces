import { styled } from "styled-components";

export const StyledHomePage = styled.div`
background-color:#274c43;
width:75%;
height:500px;
margin-left:auto;
margin-right:auto;
border: 25px solid #785115;
border-radius:8px;
color:white;
box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);

h1{
    text-decoration: underline;
}
.text{
    margin-left:50px;
}
.inner{
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
}
img{
    width: 100%;
    height:100%;   
}
`