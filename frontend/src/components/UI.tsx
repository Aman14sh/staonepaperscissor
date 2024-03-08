import React from 'react'

import { useState,useEffect } from 'react'
export const UI = () => {
  const [play,setPlay]=useState(false)
  const opt=['stone','paper','scesor'];
  const [player_choice,setplayer_choice]=useState<string >("");
  const [compSelc,setcomSelc]=useState<string>("");
  var [IsStart,setIsStart]=useState(true);
  var [scoreUser,setScore]=useState(0);
  var [scoreComp,setComp]=useState(0);
  function handleClick(e: React.MouseEvent<HTMLImageElement>){
    if(!play){
      alert('Click on Play');
      return;
    }
    setIsStart(false);
    setTimeout(()=>{
     setIsStart(true);
    },4000);
  
    handleImg(e)
    

    
  }
  function handleImg(e: React.MouseEvent<HTMLImageElement>){

    e.preventDefault();
    const num=Math.floor(Math.random()*(3-0)+0);
    const selc=e.currentTarget.getAttribute('id');
    const img=e.currentTarget.getAttribute('src')!;
    setplayer_choice(img);
    console.log(selc);
    setTimeout(() =>{
      win_helper(num,selc);
    },4000);
    
    
  }
 function win_helper(num:number,selc:null | string){
     if(opt[num] == 'stone' &&  selc == 'paper'){
      setcomSelc("https://bnz06pap001files.storage.live.com/y4mtj73i15WA3DZAngc_DD1AugJ_k6IClMTeBwfHq54kjeJMrmEg3M14zAHMIABqjwepIW2UexQlY4pzCsikBuZ8T8eXeAcKgFxZWgmujrb5HJb--M5mL4_gLezCuifzMIOMwSqrRRrx_BVakxSZJXF4kExk-eLPzE3cyuerVdp4_3Z9xKHF6U4Dq_7ClUsWxVnFn8SwK9UgilDAbYSSkfEeg?encodeFailures=1&width=224&height=236");
      setScore(scoreUser+1);
     }
     else if(opt[num] == 'paper' &&  selc == 'scesor'){
      setcomSelc("https://bnz06pap001files.storage.live.com/y4m7UpRMiQroFVBWrw1PLWrtIMPCN65t5klKkSSKxZ9avuLmUeiL0tifk9-bSFW9wa-Vmq2kb0Xi0Gwq_uBh7GmIohN8auLfWc0FFtH-gWyGJIQZiABeyEKg0m9XztMltutREp3jSj0VmjxiQKaWBMg86CbPLEC7QFudGhKyq90KFEvVutTYlFtont6TJ1qqdxz7D5CXnlbqUZZ03dHmOHDWg?encodeFailures=1&width=215&height=244");
      setScore(scoreUser+1);
     }
     else if(opt[num] == 'scesor' &&  selc == 'stone'){
      setcomSelc("https://bnz06pap001files.storage.live.com/y4mPNmzxMOCC-eASshFv1QIPlAh17firXNjBFATfHhc23FeKsi6YGhZXsgaZjBR5Aq-y4SYg5EqR1uyiKrsjMFdqjx_BywsZB7OHiGrlsv7f7VUhaZ9djSyMzt-2RCxnIVpncGRC6TMwkWIHmnA2dN9TwXhAIbt_Og8KLdY8WhE9rnbbdsPaA53mf32d76WwIcrwIfOw1P0ll_0RoyblkkHhQ?encodeFailures=1&width=228&height=225");
      setScore(scoreUser+1);
     }
     else if(opt[num] == selc){
      if(opt[num] == 'paper'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4m7UpRMiQroFVBWrw1PLWrtIMPCN65t5klKkSSKxZ9avuLmUeiL0tifk9-bSFW9wa-Vmq2kb0Xi0Gwq_uBh7GmIohN8auLfWc0FFtH-gWyGJIQZiABeyEKg0m9XztMltutREp3jSj0VmjxiQKaWBMg86CbPLEC7QFudGhKyq90KFEvVutTYlFtont6TJ1qqdxz7D5CXnlbqUZZ03dHmOHDWg?encodeFailures=1&width=215&height=244");
      }
      else if(opt[num] == 'scesor'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4mPNmzxMOCC-eASshFv1QIPlAh17firXNjBFATfHhc23FeKsi6YGhZXsgaZjBR5Aq-y4SYg5EqR1uyiKrsjMFdqjx_BywsZB7OHiGrlsv7f7VUhaZ9djSyMzt-2RCxnIVpncGRC6TMwkWIHmnA2dN9TwXhAIbt_Og8KLdY8WhE9rnbbdsPaA53mf32d76WwIcrwIfOw1P0ll_0RoyblkkHhQ?encodeFailures=1&width=228&height=225");
        
      }
      else{
        
        setcomSelc("https://bnz06pap001files.storage.live.com/y4mz6-1Z_R6Qfhc0lCPBbuQlDAWjz785a4Qz79nv6t-KUaAWNaA1ldM4JYCdYf6bX1fZNM4wZ8YeKhA1p6XfyRCGA5hstrIaZ3igQ6nZYRvk20bm2wEVYdb5v3owWYOAZpR2IB_jLa8NtRv3IfSTnuHrtqy0nGcE4nDr05g3AoFm-H9yKjtn70K69yrMn2TodLW3W0S54AVfeAklxFG5HwfpA?encodeFailures=1&width=224&height=236");
      }
      console.log("draw")
     }
     else{
      if(opt[num] == 'stone' &&  selc == 'scesor'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4mz6-1Z_R6Qfhc0lCPBbuQlDAWjz785a4Qz79nv6t-KUaAWNaA1ldM4JYCdYf6bX1fZNM4wZ8YeKhA1p6XfyRCGA5hstrIaZ3igQ6nZYRvk20bm2wEVYdb5v3owWYOAZpR2IB_jLa8NtRv3IfSTnuHrtqy0nGcE4nDr05g3AoFm-H9yKjtn70K69yrMn2TodLW3W0S54AVfeAklxFG5HwfpA?encodeFailures=1&width=224&height=236");
        setComp(scoreComp+1)
       }
       else if(opt[num] == 'paper' &&  selc == 'stone'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4m7UpRMiQroFVBWrw1PLWrtIMPCN65t5klKkSSKxZ9avuLmUeiL0tifk9-bSFW9wa-Vmq2kb0Xi0Gwq_uBh7GmIohN8auLfWc0FFtH-gWyGJIQZiABeyEKg0m9XztMltutREp3jSj0VmjxiQKaWBMg86CbPLEC7QFudGhKyq90KFEvVutTYlFtont6TJ1qqdxz7D5CXnlbqUZZ03dHmOHDWg?encodeFailures=1&width=215&height=244");
        setComp(scoreComp+1)
       }
       else if(opt[num] == 'scesor' &&  selc == 'paper'){
        setcomSelc("https://bnz06pap001files.storage.live.com/y4mPNmzxMOCC-eASshFv1QIPlAh17firXNjBFATfHhc23FeKsi6YGhZXsgaZjBR5Aq-y4SYg5EqR1uyiKrsjMFdqjx_BywsZB7OHiGrlsv7f7VUhaZ9djSyMzt-2RCxnIVpncGRC6TMwkWIHmnA2dN9TwXhAIbt_Og8KLdY8WhE9rnbbdsPaA53mf32d76WwIcrwIfOw1P0ll_0RoyblkkHhQ?encodeFailures=1&width=228&height=225");
        setComp(scoreComp+1)
       
       }
      console.log('lose');
     }
     
   
  }


  // Setting state that game is started and select one option
  //Converting Play Button to Select One

  // Hanling empty selection function

 
 
  return (
    <>
    <div className='score flex justify-between '>

      <div className='user flex items-center justify-center w-[100px] h-[100px] ml-[60px] mt-[20px] sm:mr-[30px] lg:mr-[200px] md:mr-[200px] mt-[20px]'>
        <img className='w-[50px] ' 
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAADNzc29vb2Pj4/5+fnr6+vi4uJjY2Orq6v09PRvb29BQUGwsLBXV1c8PDwlJSUeHh7V1dWFhYV3d3eenp7b29uWlpY1NTVeXl4wMDCkpKQqKioJCQnFxcV9fX0TExPWIA0tAAACtElEQVRoge1Z2dqqMAzUtiyCIMgiCOL//k95lFIoS0tS5OZ8zCVNx5ImkwRPpwMHDkhwSENpQ5xf81qEXc89roxYP6N2kud5gmfymxdw3Ckzh7ud3mLL1F+wjc65zxwycs59C/dFYip8dqH0wvxCengx5x5ccq3s4bFdDaHDTLkTwVCS6RIpxVpixp2J/XRplYrVzIRb7HYVMWG5ut/Ww15/beE2W22iQAi4sO7CQyx3wPelequUWwU4biviEbhmx2MywqVqlz2r8uGY5BLPwse6IXd7geEm7ZbYW7f04tZ0lmUavOGpzbB5atXw+OX5UMOvlF/TDWZcwK6+R4ARjQwZ6jyvgZXgjnR6iJEMGykBtzbtAIH4hRchLuiDGmXeHqUGk0cgXRFo9SXCkeNODiff1ee7RgvDxDmB61CLXTMUpS03pLbsqop4PX/DufetRPAa+sDX0H2rv8XfFti3xMgRo2tDfb2Vz63QreieveK+Xe7QnysC0tvQnw+TRbw8WcTdstFkIc1E4XwmCsWa4Uy07zQ3nkNrMYfW0sMNc+in44nOGsSbJugPSjV3uY3Zzq5q7s9NZAYh3iH3dcwcvplncsV3lincHE3tpWOKOPRZFVAaVMwP4/FaCuxwBIKXtLlIqDMSVcuhifxh5IUZRD0pRGKmqBgOk16gBB+eSJsanWEjXQuwivafQs7haijce42BCdi7dzXoMKR3PqC96GMbUPo5HmLHSk08nYQXn4jozcXhXb2dOLePq+c+5OwJ1iUCwjWa0iHk20ClV7fm5twDu+KuvL8N3D3733Kupqtu06O7sMXPYhQUTjp0YbzUiXAdhPTkKnS9+mu+8kDpzzKIKpDLbQ7n4G6fF+5Wr7CN9hS8rZ8rmPd9rFVvCJovy8K1eUH1g39QnCrYEBIHDhz4X/APZa8Y/vZS8k0AAAAASUVORK5CYII='
        
        />
        <p className='text-[40px] ml-[20px]'>{scoreUser}</p>

      </div>
      <div className='comp  w-[100px] flex items-center justify-center h-[100px] sm:mr-[30px] lg:mr-[200px] md:mr-[200px] mt-[20px]' >
        <img className="w-[50px] "
        src="data:image/jpeg;base64,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"
         alt="" />
        <p className='text-[40px] ml-[20px] '> {scoreComp}</p>
      </div>


    </div>
<div className='play-area flex w-[100%] h-[300px]'>

<div className='user-selc lg:w-[120px] lg:h-[120px] md:w-[120px] md:h-[120px] sm:w-[80px] sm:h-[80px]  border rounded-lg'>
{IsStart ? <img className="w-[100%] " src={player_choice} alt=""/>:<img  className="shake w-[100%]  " src="https://bnz06pap001files.storage.live.com/y4mtj73i15WA3DZAngc_DD1AugJ_k6IClMTeBwfHq54kjeJMrmEg3M14zAHMIABqjwepIW2UexQlY4pzCsikBuZ8T8eXeAcKgFxZWgmujrb5HJb--M5mL4_gLezCuifzMIOMwSqrRRrx_BVakxSZJXF4kExk-eLPzE3cyuerVdp4_3Z9xKHF6U4Dq_7ClUsWxVnFn8SwK9UgilDAbYSSkfEeg?encodeFailures=1&width=224&height=236" alt="" /> }


</div>


<div className='comp-selc sm:w-[80px]  sm:h-[80px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] border rounded-lg'>
{IsStart ? <img className="w-[100%] " src={compSelc} alt=""/>:<img  className="shake w-[100%]" src="https://bnz06pap001files.storage.live.com/y4mz6-1Z_R6Qfhc0lCPBbuQlDAWjz785a4Qz79nv6t-KUaAWNaA1ldM4JYCdYf6bX1fZNM4wZ8YeKhA1p6XfyRCGA5hstrIaZ3igQ6nZYRvk20bm2wEVYdb5v3owWYOAZpR2IB_jLa8NtRv3IfSTnuHrtqy0nGcE4nDr05g3AoFm-H9yKjtn70K69yrMn2TodLW3W0S54AVfeAklxFG5HwfpA?encodeFailures=1&width=224&height=236" alt="" /> }
</div>


</div>
    <div className='w-[100%]  flex-row justify-center items-center'>
      <div className='flex items-cnenter justify-center w[120px]  '>
    <img src="https://bnz06pap001files.storage.live.com/y4mtj73i15WA3DZAngc_DD1AugJ_k6IClMTeBwfHq54kjeJMrmEg3M14zAHMIABqjwepIW2UexQlY4pzCsikBuZ8T8eXeAcKgFxZWgmujrb5HJb--M5mL4_gLezCuifzMIOMwSqrRRrx_BVakxSZJXF4kExk-eLPzE3cyuerVdp4_3Z9xKHF6U4Dq_7ClUsWxVnFn8SwK9UgilDAbYSSkfEeg?encodeFailures=1&width=224&height=236"
      className='mx-2 h-12 p-[5px] border rounded-md shadow-inner' onClick={handleClick} id="stone" />
     <img src="https://bnz06pap001files.storage.live.com/y4m7UpRMiQroFVBWrw1PLWrtIMPCN65t5klKkSSKxZ9avuLmUeiL0tifk9-bSFW9wa-Vmq2kb0Xi0Gwq_uBh7GmIohN8auLfWc0FFtH-gWyGJIQZiABeyEKg0m9XztMltutREp3jSj0VmjxiQKaWBMg86CbPLEC7QFudGhKyq90KFEvVutTYlFtont6TJ1qqdxz7D5CXnlbqUZZ03dHmOHDWg?encodeFailures=1&width=215&height=244"
      className='paper-i mx-2 h-12 p-[5px] border rounded-md shadow-inner' onClick={handleClick} id="paper" />
     <img src="https://bnz06pap001files.storage.live.com/y4mOmkh6ksNzBuVaEiShklReIQ4cVbNFM_5jf8uq7D_53Uyu8vQhCVTFDEoIEs1OEazyb-LdNyrpx4qSjmifYsqkSzGIO220EzWlqZLCdy7C2AfGqeK67RdGOeM4JG2gxVnUzWp3pFf_G9vKmLTFZadUyz3lauw2lnzu9RIeyKZ_w3ShvZfrPMVegSD5_VFqQ4VNHy8RNoq6Yi-v4htT2iUyw?encodeFailures=1&width=228&height=225"
       className='mx-2 h-12 p-[5px] border rounded-md shadow-inner' onClick={handleClick}  id="scesor" />
    
      </div>
      <div className='flex items-cnenter justify-center w[120px] '>
       {play ? <button className='w-[180px] text-white bg-slate-500 border rounded-lg mt-[5px]'>Select One!</button>
       :<button className='w-[190px] text-white bg-yellow-500 border rounded-lg mt-[5px]' onClick={()=>{setPlay(true)}} >Play</button>}
      </div>
    </div>
    </>
  )
}

