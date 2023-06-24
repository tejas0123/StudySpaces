import {styled} from 'styled-components';
export const StyledSpaceInfo = styled.div`
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
.activequiz{
    margin:4%;
    display:flex;
    flex-direction:horizontal;
    column-gap:20px;
}
.quizcard{
    color:white;
    border:1px solid green;
    border-radius:5px;
    padding :20px;
    background-color:#23395d;
}

`