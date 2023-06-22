const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "http://192.168.1.93:3000",
        methods:["GET", "POST"]
    }
});

io.on("connection", (socket)=>{
    console.log(`User connected : ${socket.id}`);

    socket.on("join_room", (req)=>{
        socket.join(req.room);
        console.log(`User ${req.username} connected to room ${req.room}`);
    });

    socket.on("send_message", (data) =>{
        console.log(data);
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", ()=>{
        console.log("user disconnected", socket.id);
    });
});

server.listen(5000, ()=>{
    console.log("Chat server running");
});