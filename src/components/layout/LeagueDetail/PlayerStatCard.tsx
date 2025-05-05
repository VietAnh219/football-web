import { darkenColor } from "@/components/utils/darkenColor";
import { TopPlayerCardProps } from "@/types/stat";


const PlayerStatCard = ({ title, players }: TopPlayerCardProps) => {

    if (!players || players.length === 0) {
        return null
    };

    const topPlayer = players[0];
    const mainColor = topPlayer.color ?? "#000";
    const darkerColor = darkenColor(mainColor, 90);
    const restPlayers = players.slice(1);

    return (
        <div >
            <h2 className="text-lg text-[#37003c] font-extrabold my-2">{title}</h2>
            <div className="text-white rounded-lg overflow-hidden w-full max-w-sm shadow-md" >
                <div className="flex justify-between items-center pt-4 pl-4 rounded-t-lg" style={{ background: `linear-gradient(to right, ${mainColor}, ${darkerColor})` }}>
                    <div>
                        <p className="text-sm text-white font-semibold">{topPlayer.rank}</p>
                        <p className="text-white font-bold text-xl">{topPlayer.name}</p>
                        <div className="flex flex-row-reverse justify-end items-center gap-1">
                            <p className="text-xs text-white">{topPlayer.team}</p>
                            <img src={topPlayer.teamLogo} alt={topPlayer.name} className="h-5 w-5 object-contain" />
                        </div>
                        <p className="text-4xl font-bold mt-2">{topPlayer.goals || topPlayer.assists || topPlayer.passes || topPlayer.cleanSheets}</p>
                    </div>
                    {topPlayer.imgPlayer && (
                        <img src={topPlayer.imgPlayer} alt={topPlayer.name} className="h-[126px] object-contain" />
                    )}
                </div>

                <ul className="divide-y divide-[#f5f2f5]">
                    {restPlayers.map((player, index) => (
                        <li key={index} className="flex justify-between items-center px-4 py-2 text-[#37003c] font-bold transform transition duration-300 ease-in-out hover:scale-105 cursor-default">
                            <div className="flex items-center gap-2">
                                <span className="w-6 ">{player.rank}</span>
                                <img src={player.teamLogo} alt={player.team} className="w-5 h-5" />
                                <div>
                                    <p className="text-sm">{player.name}</p>
                                    <p className="text-xs font-medium">{player.team}</p>
                                </div>
                            </div>
                            <span className="text-sm font-bold">{player.goals || player.assists || player.passes || player.cleanSheets}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PlayerStatCard