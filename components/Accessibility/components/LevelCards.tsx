import { memo } from "react"
import LevelCard, {
    LevelCardProps,
} from "@/components/Accessibility/components/LevelCard"

export const LevelCards = memo(function LevelCards({
    cards,
}: {
    cards: LevelCardProps[]
}) {
    return (
        <div className={"grid grid-cols-2 gap-4"}>
            {cards.map((level, i) => {
                return (
                    <LevelCard
                        key={i}
                        keyName={level.keyName}
                        icon={level.icon}
                        title={level.title}
                        levels={level.levels}

                    />
                )
            })}
        </div>
    )
})
