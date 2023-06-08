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
background-color:#003400;
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
    background-color:#ccff90;
}

.formelements button{
    width:320px;
    border-radius:10px;
    height:40px;
    background-color:#238636;
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
}

button:hover{
    background-color:darkgreen;
    cursor:pointer;
}
a{
    color:green;
}

`