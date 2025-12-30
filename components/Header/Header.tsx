import { Link } from "@/i18n/navigation"
import MenuUl from "@/components/Header/Menu"

function Header() {
    return (
        <nav className={"bg-primary-color"}>
            <div
                className={
                    "border-t-1 border-border transition-all duration-75 border-b-1 py-2 md:py-6"
                }
            >
                <div className="section">logo</div>
            </div>
            <div className={"section py-2 md:py-6"}>
                <div className={"w-full flex gap-4"}>
                    <Link href={"/"}>Ana səhifə</Link>
                    <Link href={"/about"}>Haqqinda</Link>
                </div>
                <MenuUl />
            </div>
        </nav>
    )
}

export default Header
