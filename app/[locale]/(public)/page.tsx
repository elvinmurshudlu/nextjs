import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { logout } from "@/components/UserCreate/userAction"

import LoginForm from "@/components/UserCreate/LoginForm"
import {
    getTranslations,
    setRequestLocale,
} from "next-intl/server"

export default async function Home({
    params,
}: {
    params: Promise<Record<string, string>>
}) {
    const { locale } = await params
    setRequestLocale(locale)

    const session = await auth.api.getSession({
        headers: await headers(),
    })
    const t = await getTranslations("HomePage")

    if (!session) {
        return (
            <>
                {t("title")}
                <h1>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Atque, veniam.
                </h1>{" "}
                <LoginForm />
            </>
        )
    }
    return (
        <div
            className={
                "p-4 flex items-center flex-col justify-center gap-4"
            }
        >
            <h1>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cupiditate, sapiente.
                <form action={logout}>
                    <button type={"submit"}>
                        Hesabdan cix
                    </button>
                </form>
            </h1>
        </div>
    )
}
