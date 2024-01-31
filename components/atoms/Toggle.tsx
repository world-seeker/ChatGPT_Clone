'use client'


import { Bars4Icon, ChatBubbleBottomCenterIcon, ChatBubbleBottomCenterTextIcon, WindowIcon, XCircleIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import Sidebar from '../organisms/Sidebar';

function Toggle() {


  const [open, setOpen] = useState(true);
   

  return (
<div>
  {open? (   
     <div  
      onClick={()=>{setOpen(!open)}}     
      className='absolute  h-5 w-5  '>
       <Bars4Icon
       className='h-7 w-7 hover:text-green-500/50'
       />
    </div>
    )
    :
    (
    <div>
      <div  
        onClick={()=>{setOpen(!open)}}     
        className='absolute  h-7 w-44 flex flex-row-reverse
        left-[10.5rem]
        md:flex-row md:left-80'>
        <XCircleIcon className='h-5 w-5 hover:text-red-500'/>
      </div>

      <div 
       className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
        <Sidebar/>
      </div>
    </div>
    )}
</div>
  )
}

export default Toggle