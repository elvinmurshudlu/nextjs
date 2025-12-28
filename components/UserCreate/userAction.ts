"use server"

import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import {
    actionClient,
    authActionClient,
} from "@/lib/safe-action"
import { loginValidationSchema } from "@/components/UserCreate/schema"

import prisma from "@/lib/prisma"
import * as zod from "zod"
import { flattenValidationErrors } from "next-safe-action"

const validation = zod.object({
    title: zod.string(),
    description: zod.string(),
    stoppedDate: zod.string(),
    beginDate: zod.string(),
    endDate: zod.string(),
    status: zod.string(),
})

export async function sleep(ms: number) {
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}

export async function createUser(userCredential: FormData) {
    const name =
        userCredential.get("name")?.toString() ?? ""
    const password =
        userCredential.get("password")?.toString() ?? ""
    const email =
        userCredential.get("email")?.toString() ?? ""
    await auth.api.signUpEmail({
        body: { email, name: name, password },
    })
    redirect("/")
}

export async function logout() {
    await auth.api.signOut({ headers: await headers() })
}

export async function login(userCredential: FormData) {
    const password =
        userCredential.get("password")?.toString() ?? ""
    const email =
        userCredential.get("email")?.toString() ?? ""
    await auth.api.signInEmail({
        body: { email, password },
    })
}

export async function testAction() {
    await sleep(3000)
}

export const loginAction = actionClient
    .inputSchema(loginValidationSchema)
    .action(async ({ parsedInput }) => {
        await auth.api.signInEmail({
            body: {
                email: parsedInput.email,
                password: parsedInput.password,
            },
        })
    })

export const createBlogAction = authActionClient
    .inputSchema(validation)
    .action(async ({ parsedInput, ctx }) => {
        await prisma.blog.create({ data: parsedInput })
    })
