import { ChevronRight } from "lucide-react"
import { linkLeagueData } from "@/constants"
import { Link, useLocation } from "react-router-dom"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import TableLeague from "../TableHome/TableLeague"
import { useStading } from "@/components/hooks/useStadings"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Spinner from "@/components/ui/Spinner"
import { useLeagueStore } from "@/store/useSeasonStore"

const StadingsHome = () => {
    const [league, setLeague] = useState("PL");
    const setSelectedLeague = useLeagueStore((state) => state.setSelectedLeague)
    const { data: standing, isLoading, error } = useStading(league);
    const location = useLocation();

    useEffect(() => {
        setSelectedLeague(league);
    }, [league])

    if (error) {
        return <p>Error loading data</p>;
    } else {
        <p>No data available</p>
    }

    const stadingHome = standing?.table?.slice(0, 7)
    const filterTable = location.pathname.split("/")[1] === "home" ? stadingHome : standing?.table
    const mt = location.pathname.split("/")[1] === "home" ? "mt-12" : ""

    return (
        <div className="mb-12">
            <div className={`flex items-center gap-1 mb-8 ${mt}`}>
                🏆
                <h1 className="sm:text-xl font-semibold dark:text-white">Stadings</h1>
            </div>
            <div className="flex items-center justify-between">
                <Select onValueChange={(value) => setLeague(value)}>
                    <SelectTrigger className="sm:w-[300px] dark:bg-[#1B1C21] dark:text-white transition-colors duration-300">
                        <SelectValue placeholder="Select a league" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-[#1B1C21] transition-colors duration-300">
                        <SelectGroup className="dark:text-white transition-colors duration-300">
                            <SelectLabel className="dark:text-white transition-colors duration-300">League</SelectLabel>
                            {linkLeagueData.map((link) => (
                                <SelectItem value={link.link} key={link.link}>{link.icon} {link.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {
                    location.pathname.split("/")[1] === "home" && (
                        <Link className="pr-10 flex items-center text-[#636363] cursor-pointer hover:text-purple-600 transition-colors" to="/stadings">
                            <p>View All</p>
                            <ChevronRight />
                        </Link>

                    )
                }
            </div>
            <div className="pr-10 my-8">
                {isLoading
                    ?
                    <Spinner />
                    :
                    (
                        <motion.div
                            key={league}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <TableLeague table={filterTable ?? []} league={league} />
                        </motion.div>
                    )
                }

            </div>
            <div className="flex flex-col items-start lg:flex-row lg:items-center gap-4 ">
                {
                    league === "CL" ?
                        (
                            <>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-4xl bg-[#afd2f9]"></div>
                                    <p className="dark:text-white">Qualification to 1/8 finals</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-4xl bg-[#ffc988]"></div>
                                    <p className="dark:text-white">Qualification to 1/16 finals</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-4xl bg-[#afd2f9]"></div>
                                    <p className="dark:text-white">Champions League</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-4xl bg-[#ffc988]"></div>
                                    <p className="dark:text-white">Europa League</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-4xl bg-[#a7e5ca]"></div>
                                    <p className="dark:text-white">Europa Conference League</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-4xl bg-[#f8b5c8]"></div>
                                    <p className="dark:text-white">Relegation</p>
                                </div>
                            </>
                        )
                }
            </div>
        </div>
    )
}

export default StadingsHome