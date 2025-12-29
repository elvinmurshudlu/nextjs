"use client"

import clsx from "clsx"
import { ReactNode, useEffect, useState } from "react"

type LevelCardProps = {
    icon: ReactNode
    title: string
    levels: Levels[]
}
type Levels = {
    icon: ReactNode
    title: string
    onClick: () => void
}

function LevelCard({
    icon,
    title,
    levels,
}: LevelCardProps) {
    const [currentLevel, setCurrentLevel] =
        useState<number>(-1)

    const current =
        currentLevel === -1
            ? { icon, title }
            : levels[currentLevel]

    return (
        <div
            onClick={() => {
                setCurrentLevel((curr) => {
                    const _next = curr + 1
                    if (_next >= levels.length) return -1
                    return _next
                })
            }}
            className={clsx(
                "flex select-none flex-col items-center transition-all duration-150 gap-2 cursor-pointer border-2  p-4 rounded-lg hover:border-blue-500",
                {
                    "border-blue-500": currentLevel !== -1,
                    "border-gray-300": currentLevel === -1,
                    "text-blue-500": currentLevel !== -1,
                },
            )}
        >
            <div className={"text-2xl"}>{current.icon}</div>
            <h5 className={"text-base"}>{current.title}</h5>
            <LevelBadge
                levels={levels}
                current={currentLevel}
            />
        </div>
    )
}

export default LevelCard

function LevelBadge({
    levels,
    current,
}: {
    levels: Levels[]
    current: number
}) {
    useEffect(() => {
        if (current >= 0) levels[current].onClick()
    }, [current, levels])

    return (
        <div
            className={clsx(
                "w-full flex gap-1 transition ",
                {
                    "opacity-0": current === -1,
                    "opacity-100": current !== -1,
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
