import {styled} from 'styled-components';
export const StyledSpaceInfo = styled.div`
margin: 4%;

h1, h3{
    text-decoration: underline;
}

.button{
    
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
.activequiz{
    
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
    border-radius: 15px;
}
.quizcard button{
    margin: 5px;
}

.quizcard h4{
    text-decoration: underline;
}

`