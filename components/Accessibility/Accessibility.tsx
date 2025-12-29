"use client"

import { Button, Drawer } from "antd"
import { FaUniversalAccess } from "react-icons/fa"
import { useState } from "react"
import { useTranslations } from "next-intl"
import LevelCard from "@/components/Accessibility/components/LevelCard"
import { MdOutlineAccessAlarm } from "react-icons/md"
import { IoIosContrast } from "react-icons/io"
import {
    BsDisplay,
    BsFillDisplayFill,
    BsPcDisplay,
} from "react-icons/bs"

function Accessibility() {
    const t = useTranslations("Accessibility")
    const [open, setOpen] = useState(false)

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
                <div className={"grid grid-cols-2 gap-4"}>
                    <LevelCard
                        icon={<IoIosContrast />}
                        title={"Contrast +"}
                        levels={[
                            {
                                title: "İnvert Colors",
                                onClick: () =>
                                    console.log(
                                        "İnvert colors",
                                    ),
                                icon: <BsDisplay />,
                            },
                            {
                                title: "Dark Contrast",
                                onClick: () =>
                                    console.log(
                                        "Dark Contrast",
                                    ),
                                icon: <BsFillDisplayFill />,
                            },
                            {
                                title: "Light Contrast",
                                onClick: () =>
                                    console.log(
                                        "Light Contrast",
                                    ),
                                icon: <BsPcDisplay />,
                            },
                        ]}
                    />
                </div>
            </Drawer>
        </>
    )
}

export default Accessibility
