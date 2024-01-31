const express=require("express");
const app=express();

const path=require("path");
const { Server } = require('socket.io');

const http=require("http");
const { Socket } = require("dgram");
const server=http.createServer(app);
const io=new Server(server);//installing soket.io in backend, this sends script to frontend

//when one send data to server, it should be displayed to everyone

//Socket.io
io.on("connection", (socket) => {
    // console.log("A new user has Connected", socket.id);(//every refresh we are getting this, connectiontion formed)
    socket.on("user-message", (message) => {//when server recieves mess form client, it send to every client
       io.emit("message", message);//io is all connections
    })
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req,res) => {
    return res.sendFile("/public/index.html");
})

server.listen(8000, () => console.log("Server is running at Port 8000!"));