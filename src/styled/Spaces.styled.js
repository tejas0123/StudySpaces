import { styled } from "styled-components";

export const StyledSpace = styled.div`
.button{
    margin:5px;
    background-color:green;
    color:white;
    padding: 10px 15px 10px 15px;
    border:none;
    border-radius:5px;
    font-size:15px;
}
.button:hover{
    cursor:pointer;
}

.formdiv{
    width:50%;
    background-color:#003400;
    margin-right:auto;
    margin-left:auto;
    height:40%;
    padding: 20px 50px 50px 50px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-radius:5px;
    color:white;
}

.formdiv h1{
    text-align:center;
}

.innerdiv{
    display:flex;
    align-items:center;
}
.formdiv input{
    margin:10px;
    margin-left:10px;
    width:40%;
    height:30px;
    background-color:#ccff90;
    color:black;
    font-size:17px;
    border-radius:5px;
}
.createButton{
    margin:5px;
    background-color:green;
    color:white;
    padding: 10px 15px 10px 15px;
    border:none;
    border-radius:5px;
    font-size:15px;
}
.createButton:hover{
    background-color:lightgreen;
    transition:0.1s;
    color:green;
    cursor:pointer;
}


`