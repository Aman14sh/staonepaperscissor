import {useState,useEffect} from 'react'
import { Socket ,io } from "socket.io-client";
import { useSearchParams } from 'react-router-dom';
export const Room= () =>{
    const [searchParams,setSearcharams]=useSearchParams()

    const name = searchParams.get('name');
    const url="http://localhost:4000"
    const [socket,setSocket]=useState<null | Socket>(null)
  
    useEffect(() =>{
        const socket=io(url)
        console.log("sending offer")
        socket.on("send-offer",(roomId) =>{
            alert("send offer please");
            socket.emit("answer",{
                roomId,
                sdp:""
            })
        })
        socket.on("offer",({roomId,offer}) =>{

        })
        socket.on("answer",({roomId,answer})=>{
            alert('connection done');
        })
        setSocket(socket);
    },[name])
    return<div>
            Hii
    </div>
}