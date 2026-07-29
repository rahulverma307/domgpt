"use server"

import {currentUser} from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import type {User} from "@/lib/generated/prisma/client";

export async function onBoard(){
    const clerkUser = await currentUser();
    if(!clerkUser){
        throw new Error("Unauthorized");
    }

    const email = clerkUser.emailAddresses[0]?.emailAddress ?? null
    return prisma.user.upsert({
        where :{
            clerId: clerkUser.id
            
        },
        create:{
            clerId : clerkUser.id,
            email : email,
            firstName: clerkUser.firstName ?? null,
            lastName: clerkUser.lastName ?? null,
            imgUrl: clerkUser.imageUrl ?? null,
        },
        update:{
           email : email,
           firstName: clerkUser.firstName ?? null,
           lastName: clerkUser.lastName ?? null,
           imgUrl: clerkUser.imageUrl ?? null, 
        }
    })
}
    