import { createSafeActionClient } from "next-safe-action"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

// Bütün auth tələb etməyən sorğular üçündür
export const actionClient = createSafeActionClient({
    defaultValidationErrorsShape: "formatted",
    handleServerError: (e) => {
        return e.message
    },
})

// Auth tələb edən sorğular üçün action client
export const authActionClient = actionClient.use(
    async ({ next }) => {
        const session = await auth.api.getSession({
            headers: await headers(),
        })
        if (!session) throw new Error("Session not found!")
        return next({
            ctx: {
                userId: session.user.id,
                user: session.user,
            },
        })
    },
)
