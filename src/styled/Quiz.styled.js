import { styled } from "styled-components";

export const StyledQuizPage = styled.div`
*{
    font-family: 'Poppins';
}
.quiz{
    width:20%;
    ${'' /* background-color:#003400; */}
    background-color: rgb(42, 0, 42);
    margin-right:auto;
    margin-left:auto;
    height:40%;
    padding: 20px 50px 50px 50px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-radius:5px;
    color:white;
    margin-bottom: 20px;
}
.quiz textarea, input{
    height:30px;
    background-color:rgb(249, 210, 249);
    color:black;
    font-size:17px;
    border-radius:5px;
}
.quiz textarea{
    height: 45px;
}
input{
    margin-top:10px;
}
input[type='radio'] {
    accent-color: green;
}
.quiz-opn{
    display: flex;
}
.quiz-opn input{
    margin-left: 10px;
}
.button{
    margin:5px;
    background-color:#9b27a1;
    color:white;
    padding: 10px 15px 10px 15px;
    border:none;
    border-radius:5px;
    font-size:13px;
}
.button:hover{
    cursor:pointer;
}
.quiz-btn{
    display: flex;
    justify-content: center;
}
`