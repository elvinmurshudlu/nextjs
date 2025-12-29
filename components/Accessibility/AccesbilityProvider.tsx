"use client"

import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    use,
    useCallback,
    useState,
} from "react"
import Accessibility from "@/components/Accessibility/Accessibility"
import clsx from "clsx"

type SettingsProps = Record<string, string>

const AccessibilityContext = createContext<{
    settings: SettingsProps
    setSettings: Dispatch<SetStateAction<SettingsProps>>
} | null>(null)

export function useAccessibility() {
    const context = use(AccessibilityContext)
    if (!context)
        throw new Error(
            "useAccessibility must be used within a AccessibilityProvider",
        )
    return context
}

function AccessibilityProvider({
    children,
}: PropsWithChildren) {
    const [settings, setSettings] = useState<SettingsProps>(
        {},
    )

    return (
        <AccessibilityContext
            value={{ setSettings, settings }}
        >
            <div
                style={{
                    zoom: settings["zoom"],
                    filter: settings["filter"],
                }}
                className={clsx("bg-white h-full", {
                    "scale-100":
                        settings["scale"] === "110%",
                    "scale-110":
                        settings["scale"] === "130%",
                    "scale-140":
                        settings["scale"] === "140%",
                })}
            >
                {children}
            </div>
            <Accessibility />
        </AccessibilityContext>
    )
}

export default AccessibilityProvider
