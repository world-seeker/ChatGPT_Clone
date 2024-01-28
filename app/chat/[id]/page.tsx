import ChatInput from '@/components/atoms/ChatInput'
import Chat from '@/components/molecules/Chat'
import React from 'react'

type Props = {
  params: {
    id:string;
  }
}

function ChatPage({params:{id}}:Props) {

  return (
    <div className='flex flex-col h-screen overflow-hidden group'>
      <p className= 'hidden group-hover:block hover:text-red-500 font-bold pl-2 text-gray-600 animate-pulse'>made By Swapnil Pandey</p>
     {/* Chat Window */}
     <Chat chatId={id}/>
     {/* Chat Input */}
     <ChatInput chatId={id}/>
    </div>
  )
}

export default ChatPage