"use server"
import { prisma } from "@/lib/db";
import { requireUser } from "@/features/auth/action/requireUser";




export type ConversationListItem = {
    id: string,
    title: string,
    // model?:string | null,
    isPinned: boolean,
    isArchived: boolean,
    lastMessageAt: Date,
    createdAt: Date,
    updatedAt: Date
}

export async function listConversations() {
    const user = await requireUser();

    return prisma.conversation.findMany({
        where: {
            userId: user.id,
            isArchived: false
        },
        orderBy: [
            { isPinned: "desc" },
            { lastMessageAt: "desc" },


        ],
        select: {
            id: true,
            title: true,
            isPinned: true,
            isArchived: true,
            lastMessageAt: true,
            createdAt: true,
            updatedAt: true,
        }
    })
}