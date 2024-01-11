import { db } from "@/firebase";
import { TrashIcon } from "@heroicons/react/16/solid";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  id: string;
}

function ChatRow({id}:Props) {
  
  const pathName = usePathname();
  const router = useRouter();
  const { data:session } = useSession();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(
    collection(db,'users',session?.user?.email!, 'chats', id,'messages'),
  
  );
  
  useEffect(()=>{
   if(!pathName) return;
   setActive(pathName.includes(id))
  },[pathName])

  const removeChat = async() => {
    await deleteDoc(doc(db,'users', session?.user?.email!,'chats',id));
    router.replace('/');
  }

  return (
    <Link
     className={`chatRow justify-center ${active && 'bg-gray-700'}`}
     href="/chat/[Id]" as={`/chat/${id}`}
     >
       <ChatBubbleLeftIcon className="w-4 h-4"/>
       <p className="flex-1 hidden md:inline-flex truncate">{messages?.docs[messages?.docs.length - 1]?.data().length  || "New Chat "}</p>
       <TrashIcon
       onClick={removeChat}
        className="h-5 w-5 text-gray-700 hover:text-red-500"/>
    </Link>
  )
}

export default ChatRow