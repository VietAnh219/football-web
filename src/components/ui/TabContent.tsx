import { MatchDataType } from "@/types/match";
import Match from "./Match";
import { TabKey } from "@/types/tab";


const TabContent = ({ selectedTab, matchData }: { selectedTab: TabKey, matchData: MatchDataType[] }) => {
    const statusMap: Record<TabKey, string> = {
        "Latest Match": "Full-time",
        "Coming Match": "Upcoming",
        "Pre-season": "Friendly",
        "Live Games": "Live",
    }

    const filteredMatches = matchData.filter((match) => match.status === statusMap[selectedTab]);
    // console.log(filteredMatches);

    if (filteredMatches.length === 0) {
        return <div className="text-center text-gray-500">No matches available</div>;
    }

    return (
        <>
            {filteredMatches.map((match, index) => (
                <Match
                    key={index}
                    matchId={index}
                    status={match.status}
                    home={match.home}
                    away={match.away}
                    day={match.day}
                    venue={match.venue}
                    time={match.time}
                    chart={match.chart}
                    score={match.score}
                />
            ))}
        </>
    )
}

export default TabContent