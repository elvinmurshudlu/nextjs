import { ReactNode } from "react"

type MenuItem = {
    label: string
    key: string
    icon?: ReactNode
    children?: MenuItem[]
}

type CMenuProps = {
    mode: "vertical" | "horizontal"
    items: MenuItem[]
}

function CMenu({}: CMenuProps) {
    return <ul></ul>
}

export default CMenu
