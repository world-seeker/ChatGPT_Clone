'use client'

import { signOut, useSession } from "next-auth/react";
import NewChat from "../atoms/NewChat"


function Sidebar() {
  const {data:session} = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            {/* New Chat */}
            <NewChat/>
            <div>
                {/* ModleSleection */}

            </div>

            {/* Map through the chatrows */}

        </div>
        {session && (
          <div
           onClick={()=>signOut()} 
           className="flex justify-center  items-center text-white cursor-pointer
           text-[1.5vh] 
           space-x-2 hover:opacity-50 border border-gray-700 px-4 py-1 font-bold md:justify-between md:text-[1.5rem] overflow-hidden ">
            <img
             src={session.user?.image!}
             className="w-12 h-12 rounded-full"
             alt="Profile Picture"/> 
             <p>LogOut</p> 
             
          </div>
        )}
       
    </div>
  )
}

export default Sidebar