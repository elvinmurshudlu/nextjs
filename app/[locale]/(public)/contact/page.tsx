import {
    getTranslations,
    setRequestLocale,
} from "next-intl/server"

async function Page({
    params,
}: {
    params: Promise<Record<string, string>>
}) {
    const { locale } = await params
    setRequestLocale(locale)
    const t = await getTranslations("HomePage")
    return <h1>{t("description")}</h1>
}

export default Page
