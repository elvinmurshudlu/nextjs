import { PropsWithChildren } from "react"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "@/i18n/navigation"

async function Layout({
    children,
    params,
}: PropsWithChildren<{
    params: Promise<Record<string, string>>
}>) {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    const { locale } = await params

    if (!session) redirect({ href: "/", locale })

    return <>{children}</>
}

export default Layout
