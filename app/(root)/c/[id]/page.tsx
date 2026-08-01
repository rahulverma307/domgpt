import React from "react";


type ConversationPageProps = {
  params:Promise<{id:string}>
}

const page = async({params}:ConversationPageProps)=>{
  const {id} = await params;
  return(
    <>
  <h1 className="text-3xl font-semibold">hello ji {id}</h1>
    </>
  )
}
export default page
