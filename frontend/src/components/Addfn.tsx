import { useState } from "react"
import { Link } from "react-router-dom";


export const Addfn = () =>{
    const [name,setName]=useState("");

    return(<div>
            <input type="text" className="border-[2px] border-black" onChange={(e)=>{setName(e.target.value)}}/>

            <Link to={`/room/?name=${name}`}>Join</Link>
    </div>)
}