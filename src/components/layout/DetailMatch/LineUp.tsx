import ClubLogo from "@/components/ui/ClubName"
import { MatchDataType } from "@/types/match"

const LineUp = ({ selectedMatch }: { selectedMatch: MatchDataType }) => {
    const { home, away } = selectedMatch

    return (
        <>
            <h1 className="text-center pb-6 font-bold dark:text-white transition-colors duration-300">Team Line Up</h1>
            <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col items-start w-full">
                    <div className="flex items-center gap-2 mb-4">
                        <ClubLogo src={home.crest} name={home.shortName} width="32px" height="32px" horizonal />
                    </div>
                    {home.lineup.map((player) => (
                        <div
                            key={player.id}
                            className="grid grid-cols-[20px_1fr] sm:grid-cols-[40px_1fr] gap-2 w-full py-1"
                        >
                            <span className={`font-medium text-xs sm:text-[16px]`} style={{ color: home.color ?? "#2a00b5" }}>{player.shirtNumber}</span>
                            <p className="text-xs sm:text-[16px] text-left truncate dark:text-white">{player.name}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-end w-full">
                    <div className="flex items-center gap-2 mb-4">
                        <ClubLogo src={away.crest} name={away.shortName} width="32px" height="32px" />
                    </div>
                    {away.lineup.map((player) => (
                        <div
                            key={player.id}
                            className="grid grid-cols-[1fr_20px] sm:grid-cols-[1fr_40px] gap-2 w-full py-1"
                        >
                            <p className="text-xs sm:text-[16px] text-right truncate dark:text-white">{player.name}</p>
                            <span className={`font-medium text-xs sm:text-[16px] text-right`} style={{ color: away.color ?? "#9f0712" }}>{player.shirtNumber}</span>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default LineUp