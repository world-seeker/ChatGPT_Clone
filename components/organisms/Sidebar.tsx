'use client'


import { useSession } from "next-auth/react";
import LogOut from "../atoms/LogOut"
import NewChat from "../atoms/NewChat"
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "../molecules/ChatRow";

function Sidebar() {
   
  const {data:session} = useSession();

   const [chats,loading,error] = useCollection(
    session && query(collection(db,"users",session?.user?.email!,"chats"),
    orderBy("createdAt","desc"))
   );

  return (
  <div 
   className="p-2 flex flex-col h-screen">
        <div
         className="flex-1">
          <div>
           <NewChat/>

            <div>
                {/* ModleSleection */}
            </div>
          </div>
           
          
          {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} />
           ))}


        </div>
       <LogOut/>   
  </div>
  )
}

export default Sidebar