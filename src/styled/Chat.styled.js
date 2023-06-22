import { styled } from "styled-components";

export const StyledChatWindow = styled.div`
background-color: #06373A;
color: white;
padding-top: 10px;
display: flex;
flex-direction: column;
width:450px ;
padding-bottom: 20px;
border-radius: 15px;
margin: 0;
padding: 0;
margin-left: auto;
margin-right: auto;

.chat-header{
    background-color: #00917C;
    width:450px ;
    border-radius: 15px 15px 0px 0px;
    height: 60px;
    
}
.chat-header h2{
    padding-left: 10px;
}
.chat{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.userWindow{
    margin-top:10px;
}
.userWindow input{
    height: 30px;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 5px;
    width: 200px;
}
.joinBtn{
    margin-top:10px;
    background-color: #A5F0C5;
    color:black;
    padding: 5px 5px 5px 5px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 10px;

}
.msgBox{
    height: 30px;
    width: 350px;
    margin-right: 10px;
    border-radius: 20px;
    border: none;
    margin-bottom: 10px;
    padding: 5px;

}

.sendButton{
    border-radius: 50%;
    border: none;
    padding: 12px 15px 12px 15px;
    background-color: #49B265;
    color: white;
    margin-bottom: 10px;
}

.sendButton: hover{
    background-color: #159947;
    transition: 0.1s;
    cursor: pointer;
}

.sentMessage{
    background-color:skyblue;
    border-radius:10px;
    margin-left:auto;
    width:40%;
    padding: 2px 0px 0px 5px;
    color: black;
}

.receivedMessage{
    background-color:cornflowerblue;
    border-radius:10px;
    margin-right:auto;
    width:40%;
    padding: 2px 0px 0px 5px;
    color: black;
}

.time{
    padding-right: 4px;
    text-align: right;
    color: darkslategrey;
    font-size: 13px;
}
p{
    margin-top:5px;
    
}
.sender{
    color:darkblue;
}
`