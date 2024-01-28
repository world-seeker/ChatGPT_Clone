'use client'

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import ModelSelection from "../molecules/ModelSelection";
import useSWR from "swr";


type Props = {
    chatId: string;
}



function ChatInput({chatId}:Props) {
   
 // useSWR to get model
  const {data:model,mutate:setModel} = useSWR("model", {
    fallbackData:"gpt-3.5-turbo-instruct"
  })
 
  

const [prompt , setPropmt] = useState("");
  const { data:session } = useSession();

  const sendMessage = async(e:FormEvent<HTMLFormElement>
    ) => {
    e.preventDefault()
     
     if(!prompt) return;

     const input =prompt.trim();
     setPropmt("");


     const message:Message = {
      text:input,
      createdAt: serverTimestamp(),
      user : {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar : session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
      }
     }

     await addDoc(collection(db,'users', session?.user?.email!,'chats', chatId, 'messages'),message)
     const notification = toast.loading('ChatGPT is Thinking...');

     await fetch("/api/askQuestion",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        prompt:input,chatId,model,session
      })
     }).then(()=>{
     
      //Tost notification to say loading 

       toast.success('ChatGPT has Responded',{
        id: notification,
       });
     });
     ;
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form 
       onSubmit={sendMessage}
        className="p-5 space-x-5 flex"
        >

          <input
           value={prompt}
           onChange={(e) => setPropmt(e.target.value)}
           disabled={!session}
           className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed dissabled:text-gray-300"
           type="text"
           placeholder="Type Your  Message..."
          />
       
          <button  type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!prompt || !session}
          >
           <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>
          </button>
       </form>
       
      <div className="md:hidden">
        <ModelSelection/>
      </div>

    </div>
   
  )
}

export default ChatInput