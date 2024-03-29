import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SessionProvider from '@/components/molecules/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '@/components/organisms/Login'
import ClientProvider from '@/components/molecules/ClientProvider'

import Toggle from '@/components/atoms/Toggle'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatGpt Clone',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
 
  


  return (
    <html lang="en">
      <body className={inter.className + `overflow-hidden`}>
        <SessionProvider
          session={session}>

          {!session ?(<Login/>):(
            <div className='flex'>

             <div>   
             <Toggle/>
             </div>
        
             <ClientProvider/>

             <div className='bg-[#343541] flex-1 '>
              {children}
             </div>
      
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
