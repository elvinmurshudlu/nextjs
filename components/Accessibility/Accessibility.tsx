"use client"

import { Button, Drawer } from "antd"
import { FaUniversalAccess } from "react-icons/fa"
import { useMemo, useState } from "react"
import { useTranslations } from "next-intl"
import { LevelCardProps } from "@/components/Accessibility/components/LevelCard"

import { RiText } from "react-icons/ri"
import { LevelCards } from "@/components/Accessibility/components/LevelCards"
import { CgEditContrast } from "react-icons/cg"
import { TbContrast2Filled } from "react-icons/tb"
import { PiCursorThin } from "react-icons/pi"
import { IoLink } from "react-icons/io5"
import { useAccessibility } from "@/components/Accessibility/AccesbilityProvider"
import { TfiReload } from "react-icons/tfi"

function Accessibility() {
    const t = useTranslations("Accessibility")
    const [open, setOpen] = useState(false)
    const { setSettings, setCurrentStateOfLevels } =
        useAccessibility()

    const levelCard = useMemo<LevelCardProps[]>(() => {
        return [
            {
                icon: <CgEditContrast />,
                title: "Contrasts",
                keyName: "filter",
                levels: [
                    {
                        title: "Bigger Text",
                        value: "invert(100%)",
                        icon: <TbContrast2Filled />,
                    },
                ],
            },
            {
                icon: <RiText size={20} />,
                title: "Bigger Text",
                keyName: "zoom",
                levels: [
                    {
                        title: "Bigger Text",
                        value: "1.2",
                        icon: <RiText size={22} />,
                    },
                    {
                        title: "Bigger Text",
                        value: "1.3",
                        icon: <RiText size={24} />,
                    },
                    {
                        title: "Bigger Text",
                        value: "1.5",
                        icon: <RiText size={26} />,
                    },
                ],
            },
            {
                title: "Link seçin",
                icon: <IoLink />,
                keyName: "link",
                levels: [
                    {
                        title: "Link seçin",
                        icon: <IoLink />,
                        value: "link",
                    },
                ],
            },
            {
                title: "Mətn boşluğu",
                icon: <IoLink />,
                keyName: "letter",
                levels: [
                    {
                        title: "Yüngül boşluq",
                        icon: <IoLink />,
                        value: "letter-spacing-small",
                    },
                    {
                        title: "Orta boşluq",
                        icon: <IoLink />,
                        value: "letter-spacing-medium",
                    },
                    {
                        title: "Ağır boşluq",
                        icon: <IoLink />,
                        value: "letter-spacing-large",
                    },
                ],
            },
            {
                title: "Mətn align",
                icon: <IoLink />,
                keyName: "text",
                levels: [
                    {
                        title: "Sola düzəldin",
                        icon: <IoLink />,
                        value: "left-align",
                    },
                    {
                        title: "Sağa düzəldin",
                        icon: <IoLink />,
                        value: "right-align",
                    },
                    {
                        title: "Mərkəzə düzəldin",
                        icon: <IoLink />,
                        value: "center-align",
                    },
                ],
            },
        ]
    }, [])

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                size={"large"}
                className={"fixed! bottom-4 left-4"}
                type="text"
                icon={
                    <FaUniversalAccess
                        color={"blue"}
                        size={42}
                    />
                }
            ></Button>
            <Drawer
                title={t("menu")}
                placement={"left"}
                onClose={() => setOpen(false)}
                open={open}
                key={"left"}
                mask={{
                    blur:false
                }}

            >
                <div
                    className={
                        "flex flex-col h-full justify-between"
                    }
                >
                    <LevelCards cards={levelCard} />

                    <Button
                        size={"large"}
                        className={"mt-2"}
                        icon={<TfiReload />}
                        type={"primary"}
                        onClick={() => {
                            setSettings({})
                            setCurrentStateOfLevels({})
                        }}
                    >
                        Bütün Əlçatımlılıq Parametrlərini
                        sıfırlayın
                    </Button>
                </div>
            </Drawer>
        </>
    )
}

export default Accessibility
