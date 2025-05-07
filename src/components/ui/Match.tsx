import { iconStyle } from "@/constants"
import ClubLogo from "./ClubName"
import Score from "./Score"
import { ChartLine } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useMatchStore } from "@/store/useMatchStore"
import { MatchChartType, ScoreType, Team } from "@/types/match"
import useLiveScore from "../hooks/useLiveScore"
import { getTodayDateString } from "../utils/getToDay"
import { formatUTCDate } from "../utils/formatUTCDate"

const Match = ({ home, away, status, day, venue, time, chart, score, matchId }: { matchId?: number, home: Team, away: Team, status: string, day: string, venue?: string, time?: string, chart?: MatchChartType, score: ScoreType }) => {
    const setSelectedMatch = useMatchStore((state) => state.setSelectedMatch);
    const { matchData } = useLiveScore(matchId);
    const navigate = useNavigate();
    const today = getTodayDateString()

    const handleClick = () => {
        setSelectedMatch({ matchId, home, away, status, day, venue, time, chart, score });
        navigate(`/statistics/${home.shortName}-vs-${away.shortName}`);
    };

    const getStatusStyle = (status: string) => {
        switch (status.toLowerCase()) {
            case "full-time":
                return "bg-[#FA0E0E1A] text-[#FA0E0E]";
            case "upcoming":
                return "bg-[#C5E2FF] text-[#2A72D1]";
            case "live":
                return "bg-[#FFE4C2] text-[#FF8A00] animate-pulse";
            default:
                return "bg-gray-100 text-gray-500";
        }
    };

    return (
        <div className="flex flex-col border-b-1 sm:border-none sm:flex-row sm:py-4 sm:px-2 xl:px-6 px-4 py-2 justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex flex-col  sm:flex-row items-center gap-4 sm:gap-16 w-full sm:w-auto justify-between sm:justify-start">
                <div className="w-full sm:w-[100px] lg:w-[200px] flex items-center sm:items-start justify-start">
                    <ClubLogo src={home.crest} name={home.shortName} width="32px" height="32px" horizonal />
                </div>
                {
                    (status.toLowerCase() === "upcoming" || status.toLowerCase() === "friendly")
                        ? <p className="text-xl text-yellow-400">vs</p>
                        : <Score score={status.toLowerCase() === "live" && matchData ? matchData.score : score} />
                }
                <div className="w-full sm:w-[100px] lg:w-[200px] flex justify-end">
                    <ClubLogo src={away.crest} name={away.shortName} width="32px" height="32px" />
                </div>
            </div>

            <div className={`${getStatusStyle(status)} hidden xl:block rounded-xl font-medium px-4 py-2 text-center sm:text-left`}>
                {status}
            </div>

            <div className="flex items-center gap-2 sm:gap-4 text-[#636363] w-full sm:w-auto justify-between sm:justify-end dark:text-white">
                <p className="pr-2 sm:pr-0 lg:pr-6 w-full lg:w-60 truncate text-sm sm:text-base">
                    {status.toLowerCase() === "live" ? formatUTCDate(today) : day}
                </p>
                <ChartLine className={`${iconStyle} dark:text-white`} onClick={handleClick} />
            </div>
        </div>

    )
}

export default Match