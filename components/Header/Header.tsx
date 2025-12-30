import { Link } from "@/i18n/navigation"

function Header() {
    return (
        <div className={"w-full flex gap-4"}>
            <Link href={"/"}>Ana səhifə</Link>
            <Link href={"/about"}>Haqqinda</Link>
        </div>
    )
}

export default Header
