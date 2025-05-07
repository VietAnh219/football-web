import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import MatchCard from "./MatchCard";
import { useFixtures } from "@/components/hooks/useFixtures";
import { groupFixturesByDate } from "@/components/utils/groupFixtures";
import { useState } from "react";
import { roundMatch } from "@/components/utils/roundMatch";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SkeletonFixture } from "@/components/ui/AllSkeleton";


const Fixtures = () => {
    const location = useLocation();
    const endpoint = location.pathname.slice(1)
    const selectedRound = roundMatch(endpoint);
    const roundDefault = endpoint === "FL1" ? "33" : "36"
    const legueRound = endpoint === "CL" ? "SemiFinals" : roundDefault
    const [round, setRound] = useState(legueRound);
    const { data: fixtures, isLoading } = useFixtures(endpoint, round);
    const groupedFixtures = groupFixturesByDate(fixtures ?? []);

    return (
        <>
            <div className="flex items-center justify-between gap-1 mb-2 ">
                <h1 className="text-xl md:text-2xl font-bold dark:text-white">Fixtures</h1>
                {endpoint !== "CL" && (
                    <Select onValueChange={(value) => setRound(value)}>
                        <SelectTrigger className="w-[180px] dark:bg-[#1B1C21] dark:text-white">
                            <SelectValue placeholder="Choose Matchday" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-[#1B1C21]">
                            <SelectGroup className="dark:text-white">
                                <SelectLabel className="dark:text-white">Round</SelectLabel>
                                {
                                    selectedRound.map((item, index) => (
                                        <SelectItem value={item} key={index}>{item}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )}
            </div>
            <AnimatePresence mode="wait">
                {isLoading ?
                    (
                        <SkeletonFixture />
                    ) : (
                        <motion.div
                            key={round}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {groupedFixtures.map((round, index) => (
                                <div className="mt-6" key={index}>
                                    <h1 className="mb-4 text-[16px] md:text-xl text-[#37003c] font-bold dark:text-white">{round.date}</h1>
                                    <MatchCard matches={round.matches} />
                                </div>
                            ))}
                        </motion.div>
                    )}
            </AnimatePresence >
        </>
    )
}

export default Fixtures