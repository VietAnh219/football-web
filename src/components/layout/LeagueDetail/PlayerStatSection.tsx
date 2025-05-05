import { StatsSectionProps } from "@/types/stat"
import PlayerStatCard from "./PlayerStatCard"

const PlayerStatSection = ({ title, stats }: StatsSectionProps) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-[#37003c]">{title}</h1>
            <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <PlayerStatCard key={index} title={stat.title} players={stat.players ?? []} />
                ))}
            </div>
        </div>
    )
}

export default PlayerStatSection