import { styled } from "styled-components";

export const TakeQuizPage = styled.div`
*{
    font-family: 'Poppins';
}
.quiz{
    width:25%;
    ${'' /* background-color:#003400; */}
    background-color: #035956;
    margin-right:auto;
    margin-left:auto;
    height:40%;
    padding: 20px 50px 50px 50px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-radius:15px;
    color:white;
    margin-bottom: 20px;
}
.quiz textarea, input{
    height:30px;
    background-color:white;
    color:black;
    font-size:17px;
    border-radius:10px;
    border: none;
}
.quiz textarea{
    height: 45px;
    font-size:15px;
}

input[type='radio'] {
    accent-color: green;
    margin-top:10px;
    
}
.quiz-opn{
    display: flex;
}
.quiz-opn input{
    margin-left: 10px;
    font-size:12px;
    border: 1px solid silver;
}
.button{
    margin:5px;
    background-color:#000000;
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