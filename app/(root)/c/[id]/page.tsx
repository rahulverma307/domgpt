import { getConversation } from "@/features/conversation/actions/conversation.action";
import { notFound } from "next/navigation";
import { loadChatMessages } from "@/features/ai/actions/chat-store";
import { ConversationView } from "@/features/conversation/components/conversion-view";
import React from "react";



type ConversationPageProps = {
  params:Promise<{id:string}>
}

const page = async({params}:ConversationPageProps)=>{
  const {id} = await params;
try{
  await getConversation(id);
}catch(error){
notFound()
} 

const intialMessages = await loadChatMessages(id)


  return(
    <ConversationView
    key={id}
    initialMessages={initialMessages}
    conversationId={id}
    />
  )
}
export default page
