'use client'

import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Quote = {
  content: string;
  author: string;
  // Add other properties if available in the response
};










function test() {
  const [quote, setQuote] = useState<Quote|null>(null);

  useEffect(() => {
    const apiUrl = 'https://api.quotable.io/quotes/random?tags=technology,famous-quotes';

    axios.get<Quote[]>(apiUrl)
      .then(response => {
        setQuote(response.data[0]);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []); 



  return (
    <div className='flex flex-col  items-center h-screen justify-center bg-white'>

     <div className='border-1 border border-gray-400   rounded-lg h-fit w-36 sm:w-56 md:w-96 '>
      
        <div>

          <img 
           className='rounded-lg w-full'
           src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""
          />

          <div className='text-left'>
           <h1 className='font-bold p-2'>swapnil pandey</h1>
            <div className='border p-2 '>
            {quote ? (
          <div className='text-center max-w-md mx-auto'>
          <p className='italic font-medium text-lg'>{quote?.content}</p>
          <p className='text-left mt-4'>- {quote?.author}</p>
        </div>
        
       ) : (
        <p>Loading...</p>
      )}
           </div>
         </div>

         <Link 
          className=' p-2 w-full flex flex-row justify-center hover:opacity-50'
          href={'https://google.com'}>
           Google
         </Link>
         </div>

      </div>
    </div>
  )
}

export default test