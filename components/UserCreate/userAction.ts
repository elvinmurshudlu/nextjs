'use server'

import prisma from "@/lib/prisma";
import {revalidatePath} from "next/cache";

export async function createUser(userCredential: FormData) {

    const name = userCredential.get('name')?.toString()
    const surname = userCredential.get('surname')?.toString()
    const email = userCredential.get('email')?.toString()
    await prisma.user.create({
        data: {
            email: email ?? '',
            name: name ?? '',
            surname: surname ?? '',
        }
    })

    revalidatePath('/')
}