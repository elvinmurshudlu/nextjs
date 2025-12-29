import { PropsWithChildren } from "react"
import Accessibility from "@/components/Accessibility/Accessibility"

function Layout({ children }: PropsWithChildren) {
    return (
        <>
            {children}

            <Accessibility />
        </>
    )
}

export default Layout
