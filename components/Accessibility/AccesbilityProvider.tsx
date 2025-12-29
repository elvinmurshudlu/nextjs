"use client"

import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    use,
    useState,
} from "react"
import Accessibility from "@/components/Accessibility/Accessibility"
import clsx from "clsx"

type SettingsProps = Record<string, string | number>

const AccessibilityContext = createContext<{
    settings: SettingsProps
    setSettings: Dispatch<SetStateAction<SettingsProps>>
    currentStateOfLevels: Record<string, number>
    setCurrentStateOfLevels: Dispatch<
        SetStateAction<Record<string, number>>
    >
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
    const [currentStateOfLevels, setCurrentStateOfLevels] =
        useState<Record<string, number>>({})

    return (
        <AccessibilityContext
            value={{
                setSettings,
                settings,
                setCurrentStateOfLevels,
                currentStateOfLevels,
            }}
        >
            <div
                style={{
                    zoom: settings["zoom"],
                    filter: settings["filter"]?.toString(),
                }}
                className={clsx(
                    "bg-white h-full  ",
                    settings["letter"],
                    settings["text"],
                    {
                        "scale-100":
                            settings["scale"] === "110%",
                        "scale-110":
                            settings["scale"] === "130%",
                        "scale-140":
                            settings["scale"] === "140%",
                        "selected-link":
                            settings["link"] === "link",
                    },
                )}
            >
                {children}
            </div>
            <Accessibility />

            <style>
                {`
                .selected-link > * > a{
                color: yellow !important;
                text-decoration: underline !important;
                background-color: black !important;
                padding: 2px 4px !important;
                
                }
                
                .letter-spacing-small  > *{
                letter-spacing: 1.4px !important;}
                
                 .letter-spacing-medium > *{
                letter-spacing: 1.6px !important;}
                
                 .letter-spacing-large > *{
                letter-spacing: 1.9px !important;}
                
                .left-align > *{
                text-align: left !important;
                }
                
                .right-align > *{
                text-align: right !important;
                }
                
                .center-align > *{
                text-align: center !important;
                }
                
                
                `}
            </style>
        </AccessibilityContext>
    )
}

export default AccessibilityProvider
