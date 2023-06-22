import { styled } from "styled-components";
export const StyledSpace = styled.div`
font-family: 'Poppins';
.button{
    margin:5px;
    background-color:#159947;
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
    background-color:#06373A;
    margin-right:auto;
    margin-left:auto;
    height:40%;
    padding: 20px 50px 50px 50px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-radius:15px;
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
    background-color:;
    color:black;
    font-size:17px;
    border-radius:5px;
}
.createButton{
    margin:5px;
    background-color:#00917c;
    color:white;
    padding: 10px 15px 10px 15px;
    border:none;
    border-radius:5px;
    font-size:15px;
}
.createButton:hover{
    background-color:#A5F0C5;
    transition:0.1s;
    color:green;
    cursor:pointer;
}

.card {
    
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    background-color: #035956;
    color: azure;
    // font-family: 'Poppins';
}

.card:hover{
    box-shadow: 0 2px 2px black;
    cursor: pointer;
}

h2{
    padding :10px;
    margin-left:auto;
    margin-right:auto;
}

.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
}
.card-element{
    display:flex;
    align-items: center;
}
.card-element img{
    margin:10px;
}

.code{
    display: flex;
    align-items: left;
    margin: 10px;
}

.desc{
    margin-left: 10px;
    text-align: justify;
}

`