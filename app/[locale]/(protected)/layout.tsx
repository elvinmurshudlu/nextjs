import { PropsWithChildren } from "react"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

async function Layout({ children }: PropsWithChildren) {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if (!session) redirect("/")

    return <>{children}</>
}

export default Layout
