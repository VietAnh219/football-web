import { darkenColor } from "@/components/utils/darkenColor";
import { TopClubCardProps } from "@/types/stat";


const ClubStatCard = ({ title, clubs }: TopClubCardProps) => {

    if (!clubs || clubs.length === 0) {
        return null
    };

    const topClub = clubs[0];
    const mainColor = topClub.color ?? "#000";
    const darkerColor = darkenColor(mainColor, 90);
    const restClubs = clubs.slice(1);

    return (
        <div >
            <h2 className="text-lg text-[#37003c] font-extrabold my-2">{title}</h2>
            <div className="text-white rounded-lg overflow-hidden w-full max-w-sm shadow-md" >
                <div className="flex justify-between items-center p-4 rounded-t-lg" style={{ background: `linear-gradient(to right, ${mainColor}, ${darkerColor})` }}>
                    <div>
                        <p className="text-sm text-white font-semibold">{topClub.rank}</p>
                        <p className="text-white font-bold text-xl">{topClub.team}</p>
                        <div className="flex flex-row-reverse justify-end items-center">
                            <p className="text-xs text-white">{topClub.stadium}</p>
                        </div>
                        <p className="text-4xl font-bold mt-2">{topClub.goals || topClub.tackles || topClub.won || topClub.lost}</p>
                    </div>
                    {topClub.teamLogo && (
                        <img src={topClub.teamLogo} alt={topClub.team} className="h-[126px] object-contain" />
                    )}
                </div>

                <ul className="divide-y divide-[#f5f2f5]">
                    {restClubs.map((club, index) => (
                        <li key={index} className="flex justify-between items-center px-4 py-2 text-[#37003c] font-bold transform transition duration-300 ease-in-out hover:scale-105 cursor-default">
                            <div className="flex items-center gap-2">
                                <span className="w-6 ">{club.rank}</span>
                                <img src={club.teamLogo} alt={club.team} className="w-5 h-5" />
                                <div>
                                    <p className="text-sm">{club.team}</p>
                                    <p className="text-xs font-medium">{club.stadium}</p>
                                </div>
                            </div>
                            <span className="text-sm font-bold">{club.goals || club.tackles || club.won || club.lost}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ClubStatCard