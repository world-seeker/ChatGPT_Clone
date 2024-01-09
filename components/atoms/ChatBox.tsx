import { ArrowUpIcon } from '@heroicons/react/16/solid'
import React from 'react'

function ChatBox() {
  return (
    <div className='w-full flex border border-gray-500 rounded-full items-center  p-3 '>
        <input 
        type="text" 
        placeholder='Message ChatGPT...'
        className='flex-grow  bg-[#343541]  outline-none h-full w-full'
        />
        <ArrowUpIcon className='w-8 h-8 border border-gray-500 rounded-lg text-gray-500 bg-[#343541] hover:bg-gray-700/100'/>
    </div>
  )
}

export default ChatBox