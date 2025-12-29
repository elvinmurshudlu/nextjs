"use client"

import clsx from "clsx"
import {
    memo,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react"
import { useAccessibility } from "@/components/Accessibility/AccesbilityProvider"

export type LevelCardProps = {
    icon: ReactNode
    title: string
    levels: Levels[]
    keyName: string
}
type Levels = {
    icon: ReactNode
    title: string

    value: string | number
}

const LevelCard = memo(function LevelCard({
    icon,
    title,
    levels,
    keyName,
}: LevelCardProps) {
    const [currentLevel, setCurrentLevel] =
        useState<number>(-1)

    const current =
        currentLevel === -1
            ? { icon, title }
            : levels[currentLevel]
    const { setSettings } = useAccessibility()
    const addParams = useCallback(
        (key: string, value: string | number) => {
            setSettings((prev) => ({
                ...prev,
                [key]: value,
            }))
        },
        [setSettings],
    )
    const stepOnClick = useCallback(() => {
        setCurrentLevel((curr) => {
            const _next = curr + 1
            if (_next >= levels.length) {
                // onClear?.()
                return -1
            }
            return _next
        })
    }, [setCurrentLevel, levels])

    useEffect(() => {
        if (
            currentLevel >= 0 &&
            currentLevel < levels.length
        ) {
            addParams(keyName, levels[currentLevel].value)
        } else if (currentLevel == -1)
            addParams(keyName, "")
    }, [currentLevel, levels, addParams, keyName])

    return (
        <div
            onClick={stepOnClick}
            className={clsx(
                "flex select-none flex-col items-center transition-all duration-150 gap-2 cursor-pointer border-2  p-4 rounded-lg hover:border-blue-500",
                {
                    "border-blue-500": currentLevel !== -1,
                    "border-gray-300": currentLevel === -1,
                    "text-blue-500": currentLevel !== -1,
                },
            )}
        >
            <div className="w-12 h-7 flex items-center justify-center">
                <div className="text-2xl transition-all duration-200">
                    {current.icon}
                </div>
            </div>
            <h5 className={"text-base"}>{current.title}</h5>
            <LevelBadge
                levels={levels}
                current={currentLevel}
            />
        </div>
    )
})

export default LevelCard

function LevelBadge({
    levels,
    current,
}: {
    levels: Levels[]
    current: number
}) {
    return (
        <div
            className={clsx(
                "w-full flex gap-1 transition ",
                {
                    "opacity-0": current === -1,
                    "opacity-100": current !== -1,
                    hidden: levels.length <= 1,
                },
            )}
        >
            {levels.map((_, i) => (
                <span
                    key={i}
                    className={clsx("flex-1 h-1 rounded", {
                        "bg-blue-500 text-white":
                            i <= current,
                        "bg-gray-200 text-white":
                            i > current,
                    })}
                ></span>
            ))}
        </div>
    )
}
