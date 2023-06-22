import React, { useEffect, useState } from 'react'
import { StyledChatWindow } from '../styled/Chat.styled';
import { ReactDOM } from 'react';

function Chat({ socket }) {

    const [room, setRoom] = useState("");
    const msgArray = [];
    var msgCount = 0;
    const [username, setUsername] = useState("");
    const [msg, setMsg] = useState("");
    const [chatMsg, setChatMsg] = useState("");
    const [space, setSpace] = useState("Chat");
    const [user, setUser] = useState("");
    const [showChatWindow, setShowChatWindow] = useState("hidden");
    const [showUserWindow, setShowUserWindow] = useState("visible");
    const joinRoom = () => {
        if (room != "" && username != "") {
            socket.emit("join_room", { room, username });
            setShowChatWindow("visible");
            setShowUserWindow("hidden");
            setSpace(room);
            setUser(username);
        }
    };

    const sendMsg = async () => {
        if (msg != "" && room != "") {
            const messageData = {
                room: room,
                sender: username,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
                msg: msg
            };
            await socket.emit("send_message", messageData);
            
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
            setChatMsg(data.msg);
        });
    }, [socket]);

    return (
        <StyledChatWindow>
            <div className='chat-header'>
                <h2>{space}</h2>
            </div>
            <div className='chat'>
                
                <div className='userWindow' style={{ "visibility": showUserWindow }}>
                    <label>Username</label>
                    <input type='text' name='username' onChange={(e) => { setUsername(e.target.value); }}></input>
                </div>

                <div className='userWindow' style={{ "visibility": showUserWindow }}>
                    <label>Space Id</label>
                    <input type='text' name='spaceid' onChange={(e) => { setRoom(e.target.value); }}></input>
                </div>

                <div className='userWindow' style={{ "visibility": showUserWindow }}><button type='submit' className='joinBtn' onClick={joinRoom} >Join</button></div>

                <div className='chat-window' style={{ "visibility": showChatWindow }}>

                    <div className='chat-body'>
                        <div className='chatMsg'><p>{chatMsg}</p></div>
                    </div>

                    

                    <div className='chat-footer'>
                        <input className='msgBox' type='text' name='msg' placeholder='message..' onChange={(e) => { setMsg(e.target.value); }}></input>
                        <button className='sendButton' type='submit' name='send' onClick={sendMsg}>&#9658;</button>
                    </div>
                </div>
            </div>
        </StyledChatWindow>
    )
}

export default Chat
