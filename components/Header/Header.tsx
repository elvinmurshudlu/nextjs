import { Link } from "@/i18n/navigation"

function Header() {
    return (
        <nav className={"bg-primary-color"}>
            <div className={"section"}>nav logo</div>
            <div className={"section"}>
                <div className={"w-full flex gap-4"}>
                    <Link href={"/"}>Ana səhifə</Link>
                    <Link href={"/about"}>Haqqinda</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
