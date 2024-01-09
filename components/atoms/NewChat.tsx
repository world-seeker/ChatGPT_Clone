import { PlusIcon } from '@heroicons/react/16/solid'
import React from 'react'

function NewChat() {
  return (
    <div className='border-gray-700 border items-center chatRow'>
        <PlusIcon 
        className='w-4 h-4'
        />
        <p>New Chat</p>
    </div>
  )
}

export default NewChat