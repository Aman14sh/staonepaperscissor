import React from 'react'
import { useState } from 'react'
export const UI = () => {
  const [play,setPlay]=useState(false)
  const opt=['stone','paper','scesor'];
  function win_helper(num:number,selc:any){
     if(opt[num] == 'stone' &&  selc == 'paper'){
      console.log('win');
     }
     else if(opt[num] == 'paper' &&  selc == 'scesor'){
      console.log('win');
     }
     else if(opt[num] == 'scesor' &&  selc == 'stone'){
      console.log('win');
     }
     else if(opt[num] == selc){
      console.log('draw');
     }
     else{
      console.log('lose');
     }
     console.log(num);

  }
  function handleSelection(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    const num=Math.floor(Math.random()*(3-0)+0);
    const selc=e.currentTarget.getAttribute('name');
    console.log(selc);
    win_helper(num,selc);

  }
  // Setting state that game is started and select one option
  //Converting Play Button to Select One

  function handleClick(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    setPlay(true);
    const num=Math.floor(Math.random()*(3-0)+0);
    
  }
  return (
    <div className='w-[100%] h-[100vh] flex  justify-center items-center'>
      <div className='flex-row  w[120px] '>
      <button className='text-[30px] mx-2 h-12 p-[5px] border rounded-md shadow-inner' name="stone" onClick={handleSelection}>🗿</button>
      <button className='text-[30px]  mx-2 h-12 p-[5px] border rounded-md shadow-inner ' name="paper" onClick={handleSelection}>🔖</button>
      <button className='text-[30px]  mx-2 h-12 p-[5px] border rounded-md shadow-inner' name="scesor" onClick={handleSelection}>✄</button>
      <div>
       {play ? <button className='w-[180px] text-white bg-slate-500 border rounded-lg mt-[5px]'>Select One!</button>:<button className='w-[180px] text-white bg-orange-500 border rounded-lg mt-[5px]' onClick={handleClick}>Play</button>}
      </div>
      </div>
    </div>
  )
}
