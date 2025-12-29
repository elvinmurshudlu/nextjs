"use client"

import { Button, Drawer } from "antd"
import { FaUniversalAccess } from "react-icons/fa"
import { useMemo, useState } from "react"
import { useTranslations } from "next-intl"
import { LevelCardProps } from "@/components/Accessibility/components/LevelCard"
import { IoIosContrast } from "react-icons/io"
import { RiText } from "react-icons/ri"
import { LevelCards } from "@/components/Accessibility/components/LevelCards"
import { CgEditContrast } from "react-icons/cg"
import { TbContrast2Filled } from "react-icons/tb"

function Accessibility() {
    const t = useTranslations("Accessibility")
    const [open, setOpen] = useState(false)

    const levelCard = useMemo(() => {
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
                    // {
                    //     value: 'invert(1) hue-rotate(180deg)',
                    //     title: 'Əksinə çevir',
                    //     icon: <RiText size={22} />,
                    // }
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
        ] as LevelCardProps[]
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
                styles={{
                    mask: {
                        backgroundColor: "transparent",
                    },
                }}
            >
                <LevelCards cards={levelCard} />
            </Drawer>
        </>
    )
}

export default Accessibility
