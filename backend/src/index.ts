import http from 'http'
import {Server,Socket} from "socket.io"

const app=require('express');

const server=http.createServer(http);


const io=new Server(server,{
    cors:{
        origin:"*"
    }
})

io.on("connection", (socket: Socket) => {
    // ...
    console.log("a user is connected");
  });

server.listen(3000,() => {
    console.log("Server listening on port 3000*")
});




