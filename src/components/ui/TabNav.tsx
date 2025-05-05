import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TabContent from "./TabContent";
import { TabKey } from "@/types/tab";
import { useGetMatches } from "../hooks/useMatch";
import { mapComingMatchesToMatchData, mapLatestMatchesToMatchData, mapLiveMatchesToMatchData, mapPreMatchesToMatchData } from "../utils/mapMatchesToMatchData";
import { MatchComing, MatchDataType } from "@/types/match";
import { endpointMatch } from "../utils/endpointMatch";
import Spinner from "./Spinner";


const TabNav = ({ tabs }: { tabs: string[] }) => {
    const [selected, setSelected] = useState(tabs[0]);

    const endpoint = endpointMatch(selected) ?? "comingMatches";
    const { data: match, isLoading } = useGetMatches({ endpointMatch: endpoint });

    const matchData: MatchDataType[] = useMemo(() => {
        if (!match) return [];
        const comingMatch = mapComingMatchesToMatchData(match as unknown as MatchComing[]);
        const lastMatch = mapLatestMatchesToMatchData(match as unknown as MatchComing[]);
        const liveMatch = mapLiveMatchesToMatchData(match as unknown as MatchComing[]);
        const preMatch = mapPreMatchesToMatchData(match as unknown as MatchComing[]);

        return [
            ...comingMatch,
            ...lastMatch,
            ...liveMatch,
            ...preMatch
        ];
    }, [match]);

    return (
        <div className="w-full">
            <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setSelected(tab)}
                        className={`relative px-4 py-2 cursor-pointer text-sm font-medium ${selected === tab ? "text-black" : "text-gray-600"} hover:text-black transition-all`}
                    >
                        {tab}
                        {selected === tab && (
                            <motion.div
                                layoutId="underline"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5742A9]"
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="p-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isLoading ? (
                            <div className="flex justify-center items-center h-40">
                                <Spinner />
                            </div>
                        ) : (
                            <TabContent
                                selectedTab={selected as TabKey}
                                matchData={matchData as MatchDataType[]}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default TabNav