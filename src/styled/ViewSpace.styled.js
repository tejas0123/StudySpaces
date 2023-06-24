import {styled} from 'styled-components'
export const StyledViewSpace = styled.div`

font-family:'Poppins';
.activequiz{
    margin:4%;
    display:flex;
    flex-direction:horizontal;
    column-gap:20px;
}
h1, h3{
    margin: 10px 10px 10px 4%;
    color: #062315;
    text-decoration: underline;
}
.quizcard{
    color:white;
    border:none;
    border-radius:15px;
    padding :20px;
    background-color:#23395d;
}
.quizcard h4{
    text-decoration: underline;
}
.button{
    margin:5px;
    background-color:#152238;
    color:white;
    padding: 10px 15px 10px 15px;
    border:none;
    border-radius:5px;
    font-size:13px;
}
.button:hover{
    cursor:pointer;
    
}
`