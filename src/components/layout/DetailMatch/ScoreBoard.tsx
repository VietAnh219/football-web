import ClubLogo from "@/components/ui/ClubName"
import { MatchDataType } from "@/types/match";
import { motion } from 'framer-motion';

const ScoreBoard = ({ selectedMatch, status }: { selectedMatch: MatchDataType, status: string }) => {


    const { away, home, venue, time, score } = selectedMatch
    const homeGoal = score?.goal.home;
    const awayGoal = score?.goal.away;

    return (
        <div className="bg-gradient-to-r from-[#ececec] to-[#fafafa] dark:from-[#1B1C21] dark:to-[#2A2A2A] transition-colors duration-300 rounded-xl shadow-lg h-[250px] relative overflow-hidden">
            <div className="absolute inset-0 z-[1] flex justify-between items-center pointer-events-none">
                <img src={home.crest} alt="" className="w-[100px] sm:w-[300px] opacity-15" />
                <img src={away.crest} alt="" className="w-[100px] sm:w-[300px] opacity-15" />
            </div>
            <div className="relative z-[2] flex flex-col items-center my-6 text-[22px]">
                <div className="flex flex-col items-center">
                    <h1 className="text-[16px] mb-4 font-medium dark:text-white">{venue}</h1>
                    <div className="flex items-center justify-around w-full gap-4 px-2 sm:px-0 sm:gap-4 md:gap-6 lg:gap-10">
                        <div className="w-auto max-w-[100px] sm:max-w-[180px] md:max-w-[220px] lg:w-[250px] flex items-center justify-start font-medium text-center sm:text-left">
                            <ClubLogo src={home.crest} name={home.shortName} width="40px" height="40px" horizonal />
                        </div>
                        {
                            (selectedMatch?.status === "Upcoming" || selectedMatch?.status === "Friendly") ?
                                <p className="text-xl text-yellow-400">{time}</p>
                                : selectedMatch?.status === "Full-time" ?
                                    <div className="text-[14px] sm:text-xl flex gap-2 sm:gap-6">
                                        <span className="dark:text-white">{score?.fullTime.home}</span>
                                        <span className="text-[#636363] dark:text-white">FT</span>
                                        <span className="dark:text-white">{score?.fullTime.away}</span>
                                    </div>
                                    :
                                    <div className="text-xl flex gap-6">
                                        <span className="dark:text-white">{score?.fullTime.home}</span>
                                        <span className="text-[#636363] dark:text-white">{selectedMatch?.matchTime} '</span>
                                        <span className="dark:text-white">{score?.fullTime.away}</span>
                                    </div>
                        }
                        <div className="w-auto max-w-[100px] sm:max-w-[180px] md:max-w-[220px] lg:w-[250px] flex items-center justify-end font-medium text-center sm:text-right">
                            <ClubLogo src={away.crest} name={away.shortName} width="40px" height="40px" />
                        </div>
                    </div>
                    {
                        (selectedMatch?.status === "Full-time" || status === "Live") && (
                            <div className="flex w-full justify-around sm:justify-between sm:gap-75">
                                <div className="flex-col flex mt-6 gap-2">
                                    {homeGoal && homeGoal.length > 0 && homeGoal
                                        .filter(player => player.minute !== 0)
                                        .map((player, index) => (
                                            <motion.span
                                                key={player.minute}
                                                className="text-[#636363] text-xs dark:text-white"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                {player.name} {player.minute}’
                                            </motion.span>
                                        ))}
                                </div>
                                <div className="flex-col flex mt-6 gap-2">
                                    {awayGoal && awayGoal.length > 0 && awayGoal
                                        .filter(player => player.minute !== 0)
                                        .map((player, index) => (
                                            <motion.span
                                                key={player.minute}
                                                className="text-[#636363] text-xs dark:text-white"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                {player.name} {player.minute}’
                                            </motion.span>
                                        ))}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard