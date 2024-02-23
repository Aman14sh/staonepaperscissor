import React from 'react'
import { Playarea } from './Playarea'
import { useState } from 'react'
export const UI = () => {
  const [play,setPlay]=useState(false)
  const opt=['stone','paper','scesor'];
  const [player_choice,setplayer_choice]=useState<string >("");
  const [compSelc,setcomSelc]=useState<string>("");
  const [IsStart,setIsStart]=useState(true);
  async function handleImg(e: React.MouseEvent<HTMLImageElement>){

    e.preventDefault();
    const num=Math.floor(Math.random()*(3-0)+0);
    const selc=e.currentTarget.getAttribute('id');
    const img=e.currentTarget.getAttribute('src')!;
    setplayer_choice(img);
    console.log(selc);

    win_helper(num,selc);
    
  }
  async function win_helper(num:number,selc:null | string){
     if(opt[num] == 'stone' &&  selc == 'paper'){
      setcomSelc("https://bnz06pap001files.storage.live.com/y4mtj73i15WA3DZAngc_DD1AugJ_k6IClMTeBwfHq54kjeJMrmEg3M14zAHMIABqjwepIW2UexQlY4pzCsikBuZ8T8eXeAcKgFxZWgmujrb5HJb--M5mL4_gLezCuifzMIOMwSqrRRrx_BVakxSZJXF4kExk-eLPzE3cyuerVdp4_3Z9xKHF6U4Dq_7ClUsWxVnFn8SwK9UgilDAbYSSkfEeg?encodeFailures=1&width=224&height=236");
      console.log('win');
     }
     else if(opt[num] == 'paper' &&  selc == 'scesor'){
      setcomSelc("https://bnz06pap001files.storage.live.com/y4m7UpRMiQroFVBWrw1PLWrtIMPCN65t5klKkSSKxZ9avuLmUeiL0tifk9-bSFW9wa-Vmq2kb0Xi0Gwq_uBh7GmIohN8auLfWc0FFtH-gWyGJIQZiABeyEKg0m9XztMltutREp3jSj0VmjxiQKaWBMg86CbPLEC7QFudGhKyq90KFEvVutTYlFtont6TJ1qqdxz7D5CXnlbqUZZ03dHmOHDWg?encodeFailures=1&width=215&height=244");
      console.log('win');
     }
     else if(opt[num] == 'scesor' &&  selc == 'stone'){
      setcomSelc("https://bnz06pap001files.storage.live.com/y4mPNmzxMOCC-eASshFv1QIPlAh17firXNjBFATfHhc23FeKsi6YGhZXsgaZjBR5Aq-y4SYg5EqR1uyiKrsjMFdqjx_BywsZB7OHiGrlsv7f7VUhaZ9djSyMzt-2RCxnIVpncGRC6TMwkWIHmnA2dN9TwXhAIbt_Og8KLdY8WhE9rnbbdsPaA53mf32d76WwIcrwIfOw1P0ll_0RoyblkkHhQ?encodeFailures=1&width=228&height=225");
      
      console.log('win');
     }
     else if(opt[num] == selc){
      if(opt[num] == 'paper'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4m7UpRMiQroFVBWrw1PLWrtIMPCN65t5klKkSSKxZ9avuLmUeiL0tifk9-bSFW9wa-Vmq2kb0Xi0Gwq_uBh7GmIohN8auLfWc0FFtH-gWyGJIQZiABeyEKg0m9XztMltutREp3jSj0VmjxiQKaWBMg86CbPLEC7QFudGhKyq90KFEvVutTYlFtont6TJ1qqdxz7D5CXnlbqUZZ03dHmOHDWg?encodeFailures=1&width=215&height=244");
      }
      else if(opt[num] == 'scesor'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4mPNmzxMOCC-eASshFv1QIPlAh17firXNjBFATfHhc23FeKsi6YGhZXsgaZjBR5Aq-y4SYg5EqR1uyiKrsjMFdqjx_BywsZB7OHiGrlsv7f7VUhaZ9djSyMzt-2RCxnIVpncGRC6TMwkWIHmnA2dN9TwXhAIbt_Og8KLdY8WhE9rnbbdsPaA53mf32d76WwIcrwIfOw1P0ll_0RoyblkkHhQ?encodeFailures=1&width=228&height=225");
        
      }
      else{
        
        setcomSelc("https://bnz06pap001files.storage.live.com/y4mtj73i15WA3DZAngc_DD1AugJ_k6IClMTeBwfHq54kjeJMrmEg3M14zAHMIABqjwepIW2UexQlY4pzCsikBuZ8T8eXeAcKgFxZWgmujrb5HJb--M5mL4_gLezCuifzMIOMwSqrRRrx_BVakxSZJXF4kExk-eLPzE3cyuerVdp4_3Z9xKHF6U4Dq_7ClUsWxVnFn8SwK9UgilDAbYSSkfEeg?encodeFailures=1&width=224&height=236");
      }
      console.log("draw")
     }
     else{
      if(opt[num] == 'stone' &&  selc == 'scesor'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4mtj73i15WA3DZAngc_DD1AugJ_k6IClMTeBwfHq54kjeJMrmEg3M14zAHMIABqjwepIW2UexQlY4pzCsikBuZ8T8eXeAcKgFxZWgmujrb5HJb--M5mL4_gLezCuifzMIOMwSqrRRrx_BVakxSZJXF4kExk-eLPzE3cyuerVdp4_3Z9xKHF6U4Dq_7ClUsWxVnFn8SwK9UgilDAbYSSkfEeg?encodeFailures=1&width=224&height=236");
       
       }
       else if(opt[num] == 'paper' &&  selc == 'stone'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4m7UpRMiQroFVBWrw1PLWrtIMPCN65t5klKkSSKxZ9avuLmUeiL0tifk9-bSFW9wa-Vmq2kb0Xi0Gwq_uBh7GmIohN8auLfWc0FFtH-gWyGJIQZiABeyEKg0m9XztMltutREp3jSj0VmjxiQKaWBMg86CbPLEC7QFudGhKyq90KFEvVutTYlFtont6TJ1qqdxz7D5CXnlbqUZZ03dHmOHDWg?encodeFailures=1&width=215&height=244");
    
       }
       else if(opt[num] == 'scesor' &&  selc == 'paper'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4mPNmzxMOCC-eASshFv1QIPlAh17firXNjBFATfHhc23FeKsi6YGhZXsgaZjBR5Aq-y4SYg5EqR1uyiKrsjMFdqjx_BywsZB7OHiGrlsv7f7VUhaZ9djSyMzt-2RCxnIVpncGRC6TMwkWIHmnA2dN9TwXhAIbt_Og8KLdY8WhE9rnbbdsPaA53mf32d76WwIcrwIfOw1P0ll_0RoyblkkHhQ?encodeFailures=1&width=228&height=225");
        
       
       }
      console.log('lose');
     }
     
     
  }
  function handleSelection(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    

  }
  // Setting state that game is started and select one option
  //Converting Play Button to Select One

  function handleClick(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    setPlay(true);
  }
  // Hanling empty selection function
  function handleESelection(){
    alert("Click on Play first");
  }
 
 
  return (
    <>
   <Playarea img1={player_choice} img2={compSelc} isStart={IsStart}/>
    <div className='w-[100%]  flex  justify-center items-center'>
      <div className='flex-row  w[120px] '>
      <button className='text-[30px]' 
      onClick={play?  handleSelection:handleESelection }><img src="https://bnz06pap001files.storage.live.com/y4mtj73i15WA3DZAngc_DD1AugJ_k6IClMTeBwfHq54kjeJMrmEg3M14zAHMIABqjwepIW2UexQlY4pzCsikBuZ8T8eXeAcKgFxZWgmujrb5HJb--M5mL4_gLezCuifzMIOMwSqrRRrx_BVakxSZJXF4kExk-eLPzE3cyuerVdp4_3Z9xKHF6U4Dq_7ClUsWxVnFn8SwK9UgilDAbYSSkfEeg?encodeFailures=1&width=224&height=236"
      className='mx-2 h-12 p-[5px] border rounded-md shadow-inner' onClick={handleImg} id="stone" /></button>

      <button className='text-[30px]' 
      onClick={play ? handleSelection:handleESelection}><img src="https://bnz06pap001files.storage.live.com/y4m7UpRMiQroFVBWrw1PLWrtIMPCN65t5klKkSSKxZ9avuLmUeiL0tifk9-bSFW9wa-Vmq2kb0Xi0Gwq_uBh7GmIohN8auLfWc0FFtH-gWyGJIQZiABeyEKg0m9XztMltutREp3jSj0VmjxiQKaWBMg86CbPLEC7QFudGhKyq90KFEvVutTYlFtont6TJ1qqdxz7D5CXnlbqUZZ03dHmOHDWg?encodeFailures=1&width=215&height=244"
      className='paper-i mx-2 h-12 p-[5px] border rounded-md shadow-inner' onClick={handleImg} id="paper" /></button>
      <button className='text-[30px]'
      onClick={play ? handleSelection:handleESelection}><img src="https://bnz06pap001files.storage.live.com/y4mPNmzxMOCC-eASshFv1QIPlAh17firXNjBFATfHhc23FeKsi6YGhZXsgaZjBR5Aq-y4SYg5EqR1uyiKrsjMFdqjx_BywsZB7OHiGrlsv7f7VUhaZ9djSyMzt-2RCxnIVpncGRC6TMwkWIHmnA2dN9TwXhAIbt_Og8KLdY8WhE9rnbbdsPaA53mf32d76WwIcrwIfOw1P0ll_0RoyblkkHhQ?encodeFailures=1&width=228&height=225"
       className='mx-2 h-12 p-[5px] border rounded-md shadow-inner' onClick={handleImg}  id="scesor" /></button>
      <div>
       {play ? <button className='w-[180px] text-white bg-slate-500 border rounded-lg mt-[5px]'>Select One!</button>
       :<button className='w-[190px] text-white bg-yellow-500 border rounded-lg mt-[5px]' onClick={handleClick}>Play</button>}
      </div>
      </div>
    </div>
    </>
  )
}

