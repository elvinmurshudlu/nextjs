"use client"

import { Button, Drawer } from "antd"
import { FaUniversalAccess } from "react-icons/fa"
import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react"
import { useTranslations } from "next-intl"
import LevelCard, {
    LevelCardProps,
} from "@/components/Accessibility/components/LevelCard"
import { MdOutlineAccessAlarm } from "react-icons/md"
import { IoIosContrast } from "react-icons/io"
import {
    BsDisplay,
    BsFillDisplayFill,
    BsPcDisplay,
} from "react-icons/bs"
import { RiText } from "react-icons/ri"
import { useAccessibility } from "@/components/Accessibility/AccesbilityProvider"
import { LevelCards } from "@/components/Accessibility/components/LevelCards"

function Accessibility() {
    const { setSettings } = useAccessibility()
    const t = useTranslations("Accessibility")
    const [open, setOpen] = useState(false)

    const addParams = useCallback(
        (key: string, value: string) => {
            setSettings((prev) => ({
                ...prev,
                [key]: value,
            }))
        },
        [setSettings],
    )

    const levelCard = useMemo(() => {
        return [
            {
                icon: <IoIosContrast />,
                title: "Contrasts",
                levels: [],
            },
            {
                icon: <IoIosContrast />,
                title: "Bigger Text",
                onClear: () => addParams("zoom", "1"),
                levels: [
                    {
                        title: "Bigger text",
                        onClick: () =>
                            addParams("zoom", "1.2"),
                        icon: <RiText />,
                    },
                    {
                        title: "Bigger text",
                        onClick: () =>
                            addParams("zoom", "1.3"),

                        icon: <RiText />,
                    },
                    {
                        title: "Bigger text",
                        onClick: () =>
                            addParams("zoom", "1.5"),

                        icon: <RiText />,
                    },
                ],
            },
        ] as LevelCardProps[]
    }, [addParams])

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
