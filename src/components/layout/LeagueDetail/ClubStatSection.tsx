import { StatsSectionProps } from "@/types/stat"
import ClubStatCard from "./ClubStatCard"

const ClubStatSection = ({ title, stats }: StatsSectionProps) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-[#37003c]">{title}</h1>
            <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <ClubStatCard key={index} title={stat.title} clubs={stat.clubs ?? []} />
                ))}
            </div>
        </div>
    )
}

export default ClubStatSection