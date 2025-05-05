import useLiveScore from "@/components/hooks/useLiveScore";
import ScoreBoard from "@/components/layout/DetailMatch/ScoreBoard"
import TeamAnalyst from "@/components/layout/DetailMatch/TeamAnalyst"
import Motm from "@/components/ui/Motm"
import { useMatchStore } from "@/store/useMatchStore";
import { MatchDataType } from "@/types/match";

const Statistics = () => {
    const selectedMatch = useMatchStore((state) => state.selectedMatch);
    const { matchData } = useLiveScore(selectedMatch?.matchId);


    if (!selectedMatch) {
        return <div>No match selected</div>;
    }

    const isLive = selectedMatch.status === "Live";
    const isMatchDataReady = matchData && Object.keys(matchData).length > 0;

    if (isLive && !isMatchDataReady) {
        return <div>Loading live data...</div>;
    }

    const filterMatch = isLive ? matchData : selectedMatch;

    return (
        <div>
            <ScoreBoard selectedMatch={filterMatch as MatchDataType} status={selectedMatch.status} />
            {selectedMatch.status === "Full-time" ? <Motm selectedMatch={selectedMatch} /> : <div className="w-full my-6" />}
            <TeamAnalyst selectedMatch={filterMatch as MatchDataType} />
        </div>
    )
}

export default Statistics