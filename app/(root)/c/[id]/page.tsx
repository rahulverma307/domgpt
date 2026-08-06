import { getConversation } from "@/features/conversation/actions/conversation.action";
import { notFound } from "next/navigation";
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

const intialMessages = await loadChatMessage(id)


  return(
    <>
  <h1 className="text-3xl font-semibold">hello ji {id}</h1>
    </>
  )
}
export default page
