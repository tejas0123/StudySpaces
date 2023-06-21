import React, { useEffect, useState } from 'react'
// import io from 'socket.io-client'

function Chat({ socket }) {

    const [room, setRoom] = useState("");
    const [username, setUsername] = useState("");
    const [msg, setMsg] = useState("");
    const [space, setSpace] = useState("");
    const [showChatWindow, setShowChatWindow] = useState("hidden");

    const joinRoom = () => {
        if (room != "" && username != "") {
            socket.emit("join_room", {room, username});
            setShowChatWindow("visible");
            setSpace(room);
        }
    };

    const sendMsg = async () =>{
        if(msg != "" && room != ""){
            const messageData = {
                room : room,
                sender : username,
                time : 
                new Date(Date.now()).getHours() +
                ":" + 
                new Date(Date.now()).getMinutes(),
                msg : msg
            };
           await socket.emit("send_message", messageData);
           setMsg("");
        }
    };

    useEffect(() =>{
        socket.on("receive_message", (data)=>{
            console.log(data);
        });
    }, [socket]);

    return (
        <div>
            <label>Username</label>
            <input type='text' name='username' onChange={(e) => { setUsername(e.target.value); }}></input>
            <label>Space id</label>
           
            <input type='text' name='spaceid' onChange={(e) => { setRoom(e.target.value); }}></input>
            <button type='submit' onClick={joinRoom}>Join</button>
            <br />
            <div className='chat-window' style={{"visibility" : showChatWindow}}>
                <div className='chat-header'>
                    <p>{space}</p>
                </div>

                <div className='chat-body'></div>

                <div className='chat-footer'>
                    <input type='text' name='msg' placeholder='message..' onChange={(e) => { setMsg(e.target.value); }}></input>
                    <button type='submit' name='send' onClick={sendMsg}>&#9658;</button>
                </div>
            </div>

        </div>
    )
}

export default Chat
