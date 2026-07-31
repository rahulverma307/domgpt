export const queryKeys={
    conversation:{
        all:()=>["conversations"] as const,
        detail:(id:string)=>["conversations",id] as const,
    },
    message:{
        byConversationId:(conversationId:string)=>
            ["messages",conversationId] as const,
        
    }
}