import React, { useEffect, useState } from 'react'
import { StyledChatWindow } from '../styled/Chat.styled';
import { ReactDOM } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
function Chat({ socket }) {

    const [room, setRoom] = useState("");
    let msgArray = [];
    const [MsgArray, setMsgArray] = useState([]);
    const [username, setUsername] = useState("");
    const [msg, setMsg] = useState("");
    const [space, setSpace] = useState("Chat");
    const [user, setUser] = useState("");
    const [showChatWindow, setShowChatWindow] = useState(false);
    const [showUserWindow, setShowUserWindow] = useState(true);
    const joinRoom = () => {
        if (room != "" && username != "") {
            socket.emit("join_room", { room, username });
            setShowChatWindow(true);
            setShowUserWindow(false);
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
            setMsgArray((list) => [...list, {msg: messageData.msg, time: messageData.time, msgSender:messageData.sender, type: "sent"}]);
            setMsg("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
            setMsgArray((list) => [...list, {msg: data.msg, time: data.time, msgSender:data.sender,  type: "received"}]);
        });
    }, [socket]);

    return (
        <StyledChatWindow>
            <div className='chat-header'>
                <h2>{space}</h2>
            </div>
            <div className='chat'>
            
                {showUserWindow && (
                <div className='userWindow' style={{ "visibility": showUserWindow }}>
                    <div >
                        <label>Username</label>
                        <input type='text' name='username' onChange={(e) => { setUsername(e.target.value); }}></input>
                    </div>

                    <div>
                        <label>Space Id</label>
                        <input type='text' name='spaceid' onChange={(e) => { setRoom(e.target.value); }}></input>
                    </div>

                    <div><button type='submit' className='joinBtn' onClick={joinRoom} >Join</button></div>
                </div>
                )}

                {showChatWindow &&(
                <div className='chat-window' style={{ "visibility": showChatWindow }}>
                    
                        <div className='chat-body'>
                        <ScrollToBottom className='chatArea'>
                            {
                                MsgArray.map((item) => {
                                    return(
                                        <div className={(item.type == 'sent') ? 'sentMessage' : 'receivedMessage'} >
                                            <div className='sender'>{item.msgSender}</div>
                                            <div className='messageContent'>{item.msg}</div>
                                            <div className='time'>{item.time}</div>
                                        </div> 
                                    )
                                })
                                
                            }
                            </ScrollToBottom>
                            {/* <div className='chatMsg'><p>{chatMsg}</p></div> */}
                        </div>

                        

                        <div className='chat-footer'>
                            <input className='msgBox' type='text' name='msg' placeholder='message..' value={msg} onChange={(e) => { setMsg(e.target.value); }}></input>
                            <button className='sendButton' type='submit' name='send' onClick={sendMsg}>&#9658;</button>
                        </div>
                    
                </div>
                )}
                
            </div>
        </StyledChatWindow>
    )
}

export default Chat
