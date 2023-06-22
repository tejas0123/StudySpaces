import {styled} from 'styled-components'
export const StyledViewSpace = styled.div`
.activequiz{
    margin:4%;
    display:flex;
    flex-direction:horizontal;
    column-gap:20px;
}
.quizcard{
    border:1px solid green;
    border-radius:5px;
    padding :10px;
}
.button{
    margin:5px;
    background-color:black;
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