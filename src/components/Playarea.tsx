import React, { useState } from 'react'
import { FC } from 'react'

type linksD={
  img1:string|undefined;
  img2:string|undefined;
  isStart:boolean;
}
export const Playarea = (props:linksD) => {
    
  return (
    <div className='play-area flex w-[100%] h-[400px]'>

        <div className=' user-selc w-[120px] h-[120px]  border rounded-lg'>
        {props.isStart ? <img className="shake w-[100%]" src={props.img1} alt=""/>:<img  className="shake w-[100%]" src="https://bnz06pap001files.storage.live.com/y4mtj73i15WA3DZAngc_DD1AugJ_k6IClMTeBwfHq54kjeJMrmEg3M14zAHMIABqjwepIW2UexQlY4pzCsikBuZ8T8eXeAcKgFxZWgmujrb5HJb--M5mL4_gLezCuifzMIOMwSqrRRrx_BVakxSZJXF4kExk-eLPzE3cyuerVdp4_3Z9xKHF6U4Dq_7ClUsWxVnFn8SwK9UgilDAbYSSkfEeg?encodeFailures=1&width=224&height=236" alt="" /> }

      
        </div>
        

        <div className='comp-selc  w-[120px] h-[120px] border rounded-lg'>
        {props.isStart ? <img className="shake w-[100%]" src={props.img2} alt=""/>:<img  className="shake w-[100%]" src="https://bnz06pap001files.storage.live.com/y4mtj73i15WA3DZAngc_DD1AugJ_k6IClMTeBwfHq54kjeJMrmEg3M14zAHMIABqjwepIW2UexQlY4pzCsikBuZ8T8eXeAcKgFxZWgmujrb5HJb--M5mL4_gLezCuifzMIOMwSqrRRrx_BVakxSZJXF4kExk-eLPzE3cyuerVdp4_3Z9xKHF6U4Dq_7ClUsWxVnFn8SwK9UgilDAbYSSkfEeg?encodeFailures=1&width=224&height=236" alt="" /> }
        </div>

      
    </div>
  )
}
