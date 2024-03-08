import React,{useState} from 'react'
import { FaHamburger } from "react-icons/fa";
export const Navbar = () => {
  const [Ham,setHam]=useState(false);
  return (
    <div className="nav items-center">
      <div className='l-logo flex'>
        <div className='logo'>
            <img src="https://media.istockphoto.com/id/1049376864/photo/rock-paper-scissors-concept-choice-decision-making-top-above-view-on-yellow-background.webp?b=1&s=170667a&w=0&k=20&c=l-RNzxAGzoijIJhdVl3km6rN6CDpeqz-QqRC_Md6pkU=" alt="pic"
            className='my-6'
            
            
            />
        </div>
        </div>
     <div className={Ham ? 'mobile-menu-link flex nav-links ml-[40px] items-center justify-center': 'Nav-items flex nav-links ml-[40px] items-center justify-center'}>
      <li className='list-none'><a href="#" className=''><img src="data:image/png;base64,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
      "className='img-b w-[60px] h-[60px]' /></a></li>
      <li className='list-none'><a href="#" className=' border rounded-lg p-[7px] h-[40px] mx-[40px] bg-yellow-500'>About</a></li>
      </div>
       
      <FaHamburger className="hamburger w-[100px] h-[50px]" onClick={() =>{setHam(!Ham)}}/>
    </div>
  )
}