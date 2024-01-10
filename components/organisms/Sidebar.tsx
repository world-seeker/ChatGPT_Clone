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
          <button
          onClick={()=>signOut()} 
          className="flex items-center justify-between p-2 border font-bold text-white hover:opacity-50">
          <img
           src={session.user?.image!}
           className="rounded-full h-12 w-12 cursor-pointer hover:opacity-50"
           alt="Profile Picture"/>
           &nbsp;
           LogOut
           </button>
        )}
       
    </div>
  )
}

export default Sidebar