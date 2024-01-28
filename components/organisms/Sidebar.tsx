'use client'


import { useSession } from "next-auth/react";
import LogOut from "../atoms/LogOut"
import NewChat from "../atoms/NewChat"
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "../molecules/ChatRow";
import ModelSelection from "../molecules/ModelSelection";

function Sidebar() {
   
  const {data:session} = useSession();

   const [chats,loading,error] = useCollection(
    session && query(collection(db,"users",session?.user?.email!,"chats"),
    orderBy("createdAt","asc"))
   );

  return (
  <div 
   className="p-2 flex flex-col h-screen">
        <div
         className="flex-1">
          <div>
           <NewChat/>
         {/* ModleSleection */}
            <div className="hidden sm:inline">
              <ModelSelection/>


            </div>
          </div>
           
          <div className="flex flex-col space-y-2 my-2">
           
          {loading && (
            <div className="animate-pulse text-center text-white">
             <p>Loading...</p>
            </div>
          )}

          {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} />
           ))}
          </div>


        </div>
       <LogOut/>   
  </div>
  )
}

export default Sidebar