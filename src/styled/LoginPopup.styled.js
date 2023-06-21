import styled from "styled-components";

export const StyledPopup = styled.div
`
*{
    font-family: 'Poppins'
}
margin-top:20px;
h1{
    text-align:center;
}
p{
    color:red;
    text-align:center;
}
.formdiv{
padding:20px 20px 20px 20px;
display:flex;
flex-direction:column;
width:330px;
height:auto;
background-color:#06373A;
color:white;
margin-right:auto;
margin-left:auto;
align-items:center;
border-radius:15px;

}
.formelements{
    margin:10px;
}

.formelements input{
    width:320px;
    border-radius:10px;
    height:40px;
    background-color:#121212;
    border:none;
    color:white;
}

.formelements button{
    width:320px;
    border-radius:10px;
    height:40px;
    background-color:#00917C;
    border:none;
    color:white;
}
.newAccount{
    padding:20px 20px 20px 20px;
    margin-top:20px;
    width:330px;
    height:80x;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    border:1px solid grey;
    border-radius:10px;
    font-size:14px;
}

button:hover{
    background-color:#a5f0c5;
    transition:0.2s;
    cursor:pointer;
    color:black;
}
a{
    color:#00917c;
}



`